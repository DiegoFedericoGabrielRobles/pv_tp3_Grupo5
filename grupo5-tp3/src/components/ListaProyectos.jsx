import {useState} from "react";
import { proyectoService } from "../services/proyectoService";
import { ProyectoCard } from "./ProyectoCard";
import { DetalleProyecto } from "./DetalleProyecto";
import { Integrantes } from "./Integrantes";

export const ListaProyectos = () => {
    const [proyectos, setProyectos] = useState(proyectoService.obtenerProyectos());

    const [nuevoProyecto, setNuevoProyecto] = useState({
        id: "",
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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNuevoProyecto({
            ...nuevoProyecto,
            [name]: value
        });
    };

    const [proyectoDetalle, setProyectoDetalle] = useState();

    const agregar = () => {
        proyectoService.agregarProyecto({
            ...nuevoProyecto,
            equipo: nuevoProyecto.integrantes,
            recursos: { pdf: "#", drive: "#", github: "#" }
        });

        setProyectos(proyectoService.obtenerProyectos());

        setNuevoProyecto({
            id: "",
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
    };

    const [buscado, setBusqueda] = useState("");

    const buscar = (buscado) => {
        setBusqueda(buscado);    
        if (buscado === "") {
            setProyectos(proyectoService.obtenerProyectos());
        }
        else{
            setProyectos(proyectoService.buscarProyecto(buscado));
        }
    };
    
    const eliminar = (id) => {
        proyectoService.eliminarProyecto(id);
        setProyectos(proyectoService.obtenerProyectos());
    };   

    return (
        <section className="proyectos">

            <div className="buscador">
                <label> BUSCAR PROYECTO </label>
                <input type="text" placeholder="Buscar..." value={buscado} onChange={(e) => buscar(e.target.value)}/>
            </div>

            <div>
                {proyectoDetalle && (<DetalleProyecto proyecto={proyectoDetalle}></DetalleProyecto>)}
            </div>

            <form className="contenedor-form">
                <div className="form-titulo">
                    <h2 className="form-titulo" titulo="AGREGAR PROYECTO"></h2>
                </div>

                <div className="seccion-form">
                    <h3 titulo="INFORMACION PROYECTO"></h3>
                    <input type="text" placeholder="Titulo" value={nuevoProyecto.titulo} onChange={(n) => setNuevoProyecto({...nuevoProyecto,titulo: n.target.value})}/>
                    <input type="text" placeholder="Categoria" value={nuevoProyecto.categoria} onChange={(n) => setNuevoProyecto({...nuevoProyecto,categoria: n.target.value})}/>                        <input type="text" placeholder="Estado" value={nuevoProyecto.estado} onChange={(n) => setNuevoProyecto({...nuevoProyecto,estado: n.target.value})}/>
                </div>

                <div className="seccion-form">
                    <h3 titulo="INTEGRANTES"></h3>
                    <input 
                        type="text" 
                        placeholder="Nombre Integrante" 
                        value={nuevoProyecto.integrantes.nombre} 
                        onChange={handleChange} 
                    />

                    <input 
                        type="text" 
                        placeholder="Rol Integrante" 
                        value={nuevoProyecto.integrantes.rol} 
                        onChange={handleChange} 

                    />
  
                    <input 
                        type="text" 
                        placeholder="Descripción" 
                        value={nuevoProyecto.descripcion} 
                        onChange={handleChange} 
                    />
                    <input type="button" className="btn-secundario" value="Agregar Integrante "onClick={() => agregarIntegrante()}/>
                    <Integrantes integrantes={nuevoProyecto.integrantes}></Integrantes>
                </div>

                <div className="seccion-form">
                        <h3 titulo="ENLACES"></h3>
                        <input type="text" placeholder="GitHub" value={nuevoProyecto.enlaces.github} onChange={(n) => setNuevoProyecto({...nuevoProyecto,enlaces: {...nuevoProyecto.enlaces,github:n.target.value}})}/>
                        <input type="text" placeholder="PDF" value={nuevoProyecto.enlaces.pdf} onChange={(n) => setNuevoProyecto({...nuevoProyecto,enlaces: {...nuevoProyecto.enlaces,pdf:n.target.value}})}/>
                        <input type="text" placeholder="Drive" value={nuevoProyecto.enlaces.drive} onChange={(n) => setNuevoProyecto({...nuevoProyecto,enlaces: {...nuevoProyecto.enlaces,drive:n.target.value}})}/>
                    </div>

                    <div className="seccion-form">
                        <h3 titulo="DESCRIPCION PROYECTO"></h3>
                        <textarea placeholder="Descripcion del Proyecto nuevo..." value={nuevoProyecto.descripcion} onChange={(n) => setNuevoProyecto({...nuevoProyecto,descripcion: n.target.value})}> </textarea>
                    </div>
                    
                    <input type="button" className="btn-principal" value="Agregar" onClick={() => {agregar(); setProyectoDetalle()}}/>
            </form>
        </section>
    );  
};