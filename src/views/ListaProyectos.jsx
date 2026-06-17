import {useState, useEffect, useRef} from "react";
import { proyectoService } from "../services/proyectoService";
import { ProyectoCard } from "../components/ProyectoCard";
import { FormularioProyecto } from "../components/FormularioProyecto";
import { RegistroActividad } from "../components/RegistroActividad";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";

export const ListaProyectos = () => {
    const [proyectos, setProyectos] = useState(proyectoService.obtenerProyectos());

    const [buscado, setBusqueda] = useState("");

    const [abrirFormulario, setAbrirFormulario] = useState(false);

    const proyectosFiltrados = proyectos.filter((proyecto) => {
        return proyecto.titulo.toLowerCase().includes(buscado.toLowerCase());
    });

    const buscar = (buscado) => {
        setBusqueda(buscado);    
    };
    
    const eliminar = (id) => {
        console.log("Eliminar proyecto:", id);
        proyectoService.eliminarProyecto(id);
        setProyectos(proyectoService.obtenerProyectos());
    };   

    const agregar = (nuevoProyecto) => {

        proyectoService.agregarProyecto(nuevoProyecto);

        setProyectos(proyectoService.obtenerProyectos());

    };

    const [ultimaActividad, setUltimaActividad] = useState("");

    const primeraCarga = useRef(true);

    useEffect(() => {

        if (primeraCarga.current) {
            primeraCarga.current = false;
            return;
        }

        const fecha = new Date();

        const dia = String(fecha.getDate()).padStart(2, "0");
        const mes = String(fecha.getMonth() + 1).padStart(2, "0");
        const anio = fecha.getFullYear();

        const hora = String(fecha.getHours()).padStart(2, "0");
        const minutos = String(fecha.getMinutes()).padStart(2, "0");

        const registro = `Última actualización de la lista: ${dia}/${mes}/${anio} a las ${hora}:${minutos} hs.`;

        setUltimaActividad(registro);

    },[proyectos]);

    return (
        <>
            <section className="proyectos">

                <div className="buscador">
                    <TextField label="Buscar proyecto" fullWidth value={buscado} onChange={(e) => buscar(e.target.value)}/>
                </div>

                <Button type="button" variant="contained" onClick={() => setAbrirFormulario(true)}> Nuevo Proyecto </Button>

                <div className="lista-proyectos">
                    {proyectosFiltrados.map((proyecto) => (
                    <article key={proyecto.id} className="contenedor-proyectos">
                        <ProyectoCard proyecto={proyecto} eliminar={eliminar}></ProyectoCard>
                    </article>
                    ))}
                </div>
                
                <Dialog open={abrirFormulario} onClose={() => setAbrirFormulario(false)} maxWidth="md" fullWidth>
                    <DialogTitle> AGREGAR PROYECTO </DialogTitle>
                    <DialogContent> <FormularioProyecto agregar={agregar} cerrarFormulario={() => setAbrirFormulario(false)} /> </DialogContent>
                </Dialog>

                <div> 
                    {ultimaActividad && (<RegistroActividad fecha={ultimaActividad}></RegistroActividad>)}
                </div>
            </section>
        </>
    );  
};

