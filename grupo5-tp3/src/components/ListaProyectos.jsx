import {useState} from "react";
import { proyectoService } from "../services/proyectoService";
import { DetalleProyecto } from "./DetalleProyecto";
import { ProyectoCard } from "./ProyectoCard";
import { Integrantes } from "./Integrantes";

export const ListaProyectos = () => {
  const [proyectos, setProyectos] = useState(proyectoService.obtenerProyectos());
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);

  const [nuevoProyecto, setNuevoProyecto] = useState({
    id: "",
    titulo: "",   
    categoria: "",
    estado: "",

    integrantes: [],

    recursos: {
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

  const agregar = () => {

    proyectoService.agregarProyecto(nuevoProyecto);
    setProyectos(proyectoService.obtenerProyectos());
    setNuevoProyecto({ 
      id: "", 
      titulo: "", 
      categoria: "", 
      estado: "",
      integrantes: [],
      recursos: {
        github: "",
        pdf: "",
        drive: ""
      }
    });
  };


  const [buscado, setBuscado] = useState("");

  const buscar = (buscado) => {
    setBuscado(buscado);
    if (buscado === "") {
      setProyectos(proyectoService.obtenerProyectos());
    } else {
      setProyectos(proyectoService.buscarProyecto(buscado));
    }
  };

  const eliminar = (id) => {
    proyectoService.eliminarProyecto(id);
    setProyectos(proyectoService.obtenerProyectos());
  };

  const seleccionar = (proyecto) => {
    setProyectoSeleccionado(proyectoSeleccionado?.id === proyecto.id ? null : proyecto);
  };

  return (
    <section className="proyectos">

      <div className="buscador">
        <label> BUSCAR PROYECTO </label>
        <input type="text" placeholder="Buscar..." value={buscado} onChange={(e) => buscar(e.target.value)}/>
      </div>

      <div className="lista-proyectos">
        {proyectos.map((proyecto) => (
          <article key={proyecto.id} className="contenedor-proyectos">
            <ProyectoCard proyecto={proyecto}></ProyectoCard>
            <button onClick={() => {eliminar(proyecto.id); 
              if (proyectoSeleccionado?.id === proyecto.id) {
                setProyectoSeleccionado(null);
              }}}> Eliminar </button>
            <button onClick={() => seleccionar(proyecto)}> {proyectoSeleccionado?.id === proyecto.id ? "Cerrar" : "Ver Detalle"} </button>          
          </article>
        ))}
      </div>

      <div>
        {proyectoSeleccionado && (<DetalleProyecto proyecto={proyectoSeleccionado}></DetalleProyecto>)}
      </div>
          
      <form className="contenedor-form">
        <div className="form-titulo">
            <h2> AGREGAR PROYECTO </h2>
        </div>
      
        <div className="seccion-form">
          <h3> INFORMACION PROYECTO </h3>
          <input type="text" required placeholder="Titulo" value={nuevoProyecto.titulo} onChange={(n) => setNuevoProyecto({...nuevoProyecto,titulo: n.target.value})}/>
          <input type="text" required placeholder="Categoria" value={nuevoProyecto.categoria} onChange={(n) => setNuevoProyecto({...nuevoProyecto,categoria: n.target.value})}/>                
          <input type="text" required placeholder="Estado" value={nuevoProyecto.estado} onChange={(n) => setNuevoProyecto({...nuevoProyecto,estado: n.target.value})}/>
        </div>
      
        <div className="seccion-form">
          <h3> INTEGRANTES </h3>
          <input type="text" required placeholder="Nombre integrante" value={nuevoIntegrante.nombre} onChange={(e) => setNuevoIntegrante({...nuevoIntegrante,nombre:e.target.value})}/>
          <input type="text" required placeholder="Rol" value={nuevoIntegrante.rol} onChange={(e) => setNuevoIntegrante({...nuevoIntegrante,rol:e.target.value})}/>
          <input type="button" className="btn-secundario" value="Agregar Integrante "onClick={() => agregarIntegrante()}/>
          <Integrantes integrantes={nuevoProyecto.integrantes}></Integrantes>
        </div>
                              
        <div className="seccion-form">
          <h3> RECURSOS </h3>
            <input type="text" placeholder="GitHub" value={nuevoProyecto.recursos.github} onChange={(n) => setNuevoProyecto({...nuevoProyecto,recursos: {...nuevoProyecto.recursos,github:n.target.value}})}/>
            <input type="text" placeholder="PDF" value={nuevoProyecto.recursos.pdf} onChange={(n) => setNuevoProyecto({...nuevoProyecto,recursos: {...nuevoProyecto.recursos,pdf:n.target.value}})}/>
            <input type="text" placeholder="Drive" value={nuevoProyecto.recursos.drive} onChange={(n) => setNuevoProyecto({...nuevoProyecto,recursos: {...nuevoProyecto.recursos,drive:n.target.value}})}/>
        </div>
      
        <div className="seccion-form">
          <h3 titulo="DESCRIPCION PROYECTO"></h3>
          <textarea placeholder="Descripcion del Proyecto" value={nuevoProyecto.descripcion} onChange={(n) => setNuevoProyecto({...nuevoProyecto,descripcion: n.target.value})}></textarea>
        </div>
                          
        <input type="button" className="btn-principal" value="Agregar" onClick={() => agregar()}/>
      </form>
    </section>
  );
};