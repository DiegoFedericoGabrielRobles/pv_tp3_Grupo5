import { useState } from "react";
import { Integrantes } from "./Integrantes";
import { TituloTres } from "./TituloTres";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

export const FormularioProyecto = ({ agregar, cerrarFormulario }) => {
    const [nuevoProyecto, setNuevoProyecto] = useState({
        titulo: "",
        categoria: "",
        estado: "",
        descripcion:"",
    
        integrantes: [],

        enlaces: {
            github: "",
            pdf: "",
            drive: ""
        }
    });

    const [nuevoIntegrante, setNuevoIntegrante] = useState({
        nombre: "",
        rol: ""
    });

    const agregarIntegrante = () => {
        
        setNuevoProyecto({...nuevoProyecto,integrantes: [...nuevoProyecto.integrantes,nuevoIntegrante]});

        setNuevoIntegrante({
            nombre: "",
            rol: ""
        });
    };

    const enviarFormulario = () => {

    agregar(nuevoProyecto);

    setNuevoProyecto({
        titulo: "",
        categoria: "",
        estado: "",
        descripcion: "",
        integrantes: [],
        enlaces: {
            github: "",
            pdf: "",
            drive: ""
        }
    });

    setNuevoIntegrante({
        nombre: "",
        rol: ""
    });

    cerrarFormulario();
};

    return (
        <> 
            <form className="contenedor-form">
                
                <div className="seccion-form">
                    <TituloTres titulo={"INFORMACION PROYECTOS"}></TituloTres>
                    <TextField fullWidth label="Titulo" value={nuevoProyecto.titulo} onChange={(n) => setNuevoProyecto({...nuevoProyecto,titulo: n.target.value})}/>
                    <TextField fullWidth label="Categoria" value={nuevoProyecto.categoria} onChange={(e) => setNuevoProyecto({ ...nuevoProyecto, categoria: e.target.value})}/>
                    <FormControl fullWidth>
                        <InputLabel>Estado</InputLabel>
                        <Select value={nuevoProyecto.estado} label="Estado" onChange={(e) => setNuevoProyecto({...nuevoProyecto, estado: e.target.value})}>
                            <MenuItem value="En Curso">En Curso</MenuItem>
                            <MenuItem value="Finalizado">Finalizado</MenuItem>
                        </Select>
                    </FormControl>
                </div>

                <div className="seccion-form">
                    <TituloTres titulo={"INTEGRANTES"}></TituloTres>
                    <TextField fullWidth label="Nombre integrante" value={nuevoIntegrante.nombre} onChange={(e) => setNuevoIntegrante({ ...nuevoIntegrante, nombre: e.target.value})}/>
                    <TextField fullWidth label="Rol" value={nuevoIntegrante.rol} onChange={(e) => setNuevoIntegrante({ ...nuevoIntegrante, rol: e.target.value})}/>
                    <Button type="button" variant="outlined" onClick={agregarIntegrante}> Agregar Integrante </Button>
                    <Integrantes integrantes={nuevoProyecto.integrantes}></Integrantes>
                </div>
                        
                <div className="seccion-form">
                    <TituloTres titulo={"ENLACES"}></TituloTres>
                    <TextField fullWidth label="GitHub" value={nuevoProyecto.enlaces.github} onChange={(e) => setNuevoProyecto({ ...nuevoProyecto, enlaces: {...nuevoProyecto.enlaces,github:e.target.value}})}/>
                    <TextField fullWidth label="PDF" value={nuevoProyecto.enlaces.pdf} onChange={(e) => setNuevoProyecto({ ...nuevoProyecto, enlaces: {...nuevoProyecto.enlaces,pdf:e.target.value}})}/>
                    <TextField fullWidth label="Drive" value={nuevoProyecto.enlaces.drive} onChange={(e) => setNuevoProyecto({ ...nuevoProyecto, enlaces: {...nuevoProyecto.enlaces,drive:e.target.value}})}/>
                </div>

                <div className="seccion-form">
                    <TituloTres titulo={"DESCRIPCION PROYECTOS"}></TituloTres>
                    <TextField label="Descripción" multiline rows={1} fullWidth value={nuevoProyecto.descripcion} onChange={(e) =>setNuevoProyecto({...nuevoProyecto,descripcion: e.target.value})}/>
                </div>
                    
                <Button type="button" variant="contained" fullWidth onClick={enviarFormulario}> Agregar Proyecto </Button>
            </form>
        </>
    );
};
