import {useState, useEffect, useRef} from "react";
import { proyectoService } from "../services/proyectoService";
import { DetalleProyecto } from "./DetalleProyecto";
import { ProyectoCard } from "./ProyectoCard";
import { RegistroActividad } from "./RegistroActividad";
import { FormularioProyecto } from "./FormularioProyecto";

export const ListaProyectos = () => {
  const [proyectos, setProyectos] = useState(proyectoService.obtenerProyectos());
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);
  const [buscado, setBuscado] = useState("");
  const [ultimaActualizacion, setUltimaActualizacion] = useState(null);

  const  esPrimerRender = useRef(true);

  useEffect(() => {
    if (esPrimerRender.current) {
      esPrimerRender.current = false;
      return;
    }

    const ahora = new Date();
    const dia = ahora.getDate().toString().padStart(2, "0");
    const mes = (ahora.getMonth() + 1).toString().padStart(2, "0");
    const año = ahora.getFullYear();
    const hora = ahora.getHours().toString().padStart(2, "0");
    const minutos = ahora.getMinutes().toString().padStart(2, "0");

    const fechaFormateada= `${dia}/${mes}/${año} a las ${hora}:${minutos} hs.`;
    setUltimaActualizacion(fechaFormateada);
  }, [proyectos]);



  const agregar = (nuevoProyecto) => {
    proyectoService.agregarProyecto(nuevoProyecto);
    setProyectos(proyectoService.obtenerProyectos());
  };

  const proyectoVisible = buscado ==="" ? proyectos : proyectos.filter(p => p.titulo.toLowerCase().includes(buscado.toLowerCase()));

  

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
        <input type="text" placeholder="Buscar..." value={buscado} onChange={(e) => setBuscado(e.target.value)}/>
      </div>

      <div className="lista-proyectos">
        {proyectoVisible.map((proyecto) => (
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

      <FormularioProyecto onAgregarProyecto={agregar}/>
      {ultimaActualizacion && <RegistroActividad fecha={ultimaActualizacion}/>}
    </section>
  );
};