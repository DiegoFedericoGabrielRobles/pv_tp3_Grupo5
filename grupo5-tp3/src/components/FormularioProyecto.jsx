import { useState } from "react";
import { Integrantes } from "./Integrantes";

export const FormularioProyecto = ({onAgregarProyecto}) =>{
    const [nuevoProyecto, setNuevoProyecto] = useState({
        id: "",
        titulo: "",   
        categoria: "",
        estado: "",
        descripcion: "",
    
        integrantes: [],
        recursos: {
            github: "",
            pdf: "",
            drive: ""
        }
    });

    const [nuevoIntegrantes, setNuevoIntegrantes] = useState({nombre: "", rol: ""});
    const agregarIntegrante = () => {
        setNuevoProyecto({...nuevoProyecto,integrantes: [...nuevoProyecto.integrantes,nuevoIntegrantes]});
        setNuevoIntegrantes({nombre: "", rol: ""});
    };
    const haldleSubmit = () => {
        onAgregarProyecto(nuevoProyecto);
        setNuevoProyecto({id: "", titulo: "",   categoria: "", estado: "", descripcion: "", integrantes: [], recursos: {github: "", pdf: "", drive: ""}});
    };

    return (
        <form className="contenedor-form">
            <div className="form-titulo">
                <h2> AGREGAR PROYECTO </h2>
            </div>
            <div className="seccion-form">
                <h3> INFORMACION PROYECTO </h3>
                <input type="text" required placeholder="Titulo" value={nuevoProyecto.titulo} onChange={(e) => setNuevoProyecto({...nuevoProyecto,titulo: e.target.value})}/>
                <input type="text" requiered placeholder="Categoria" value={nuevoProyecto.categoria} onChange={(e)=> setNuevoProyecto({...nuevoProyecto, categoria: e.target.value})}/>
                <input type="text" required placeholder="Estado" value={nuevoProyecto.estado} onChange={(e)=>setNuevoProyecto({...nuevoProyecto, estado: e.target.value})}/>
            </div>

            <div className="seccion-form">
                <h3> INTEGRANTES </h3>
                <input type="text" placeholder="Nombre integrante" value={nuevoIntegrantes.nombre} onChange={(e) => setNuevoIntegrantes({...nuevoIntegrantes,nombre: e.target.value})}/>
                <input type="text"  placeholder="Rol" value={nuevoIntegrantes.rol} onChange={(e)=> setNuevoIntegrantes({...nuevoIntegrantes,rol: e.target.value})}/>
                <input type="button" className="btn-secundario" value="Agregar Integrante "onClick={agregarIntegrante}/>
                <Integrantes integrantes={nuevoProyecto.integrantes}></Integrantes>
            </div>

            <div className="seccion-form">
                <h3> RECURSOS </h3>
                <input type="text" placeholder="GitHub" value={nuevoProyecto.recursos.github} onChange={(e) => setNuevoProyecto({...nuevoProyecto,recursos: {...nuevoProyecto.recursos,github:e.target.value}})}/>
                <input type="text" placeholder="PDF" value={nuevoProyecto.recursos.pdf} onChange={(e)=> setNuevoProyecto({...nuevoProyecto,recursos: {...nuevoProyecto.recursos,pdf: e.target.value}})}/>
                <input type="text" placeholder="Drive" value={nuevoProyecto.recursos.drive} onChange={(e)=> setNuevoProyecto({...nuevoProyecto,recusos:{...nuevoProyecto.recursos,drive: e.target.value}})}/>
            </div>

            <div className="seccion-form">
                <h3>DESCRIPCION PROYECTO</h3>
                <textarea placeholder="Descripcion del Proyecto" value={nuevoProyecto.descripcion} onChange={(e)=> setNuevoProyecto({...nuevoProyecto,descripcion: e.target.value})}></textarea>
            </div>
            <input type="button" className="btn-principal" value="Agregar" onClick={haldleSubmit}/>
        </form>
    );
};