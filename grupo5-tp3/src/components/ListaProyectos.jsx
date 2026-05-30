import {useState} from "react";
import { proyectoService } from "../services/proyectoService";
import { Titulo } from "./Titulo";
import { DetalleProyecto } from "./DetalleProyecto";

export const ListaProyectos = () => {
  const [proyectos, setProyectos] = useState(proyectoService.obtenerProyectos());
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState(null);

  const [nuevoProyecto, setNuevoProyecto] = useState({
    id: "",
    titulo: "",   
    categoria: "",
    estado: "",
    nombreIntegrantes: "",
    rolIntegrantes: "",
  });

  const agregar = () => {
    const {id, titulo, categoria, estado, nombreIntegrantes, rolIntegrantes} = nuevoProyecto;
    if (!id || !titulo || !categoria || !estado || !nombreIntegrantes || !rolIntegrantes) {
      alert("Debe completar todos los campos");
      return;
    }

    const idExiste = proyectos.some(p => p.id === Number(nuevoProyecto.id));
    if (idExiste) {
      alert("El ID ya existe. Por favor, Ponga un ID diferente.");
      return;
    }

    proyectoService.agregarProyecto({id, titulo, categoria, estado, descripcion: "Sin descripcion", recursos: {github: "#", pdf: "#", drive: "#" }, integrantes: [{nombre: nombreIntegrantes, rol: rolIntegrantes}] });
    setProyectos(proyectoService.obtenerProyectos());
    setNuevoProyecto({ id: "", titulo: "", categoria: "", estado: "", nombreIntegrantes: "", rolIntegrantes: "" });
  };

  const [buscado, setBuscado] = useState("");

  const buscar = (termino) => {
    setBuscado(termino);
    if (termino === "") {
      setProyectos(proyectoService.obtenerProyectos());
    } else {
      setProyectos(proyectoService.buscarProyecto(termino));
    }
  };

  const eliminar = (id) => {
    proyectoService.eliminarProyecto(id);
    if (proyectoSeleccionado?.id === id) {
      setProyectoSeleccionado(null);
    }
    setProyectos(proyectoService.obtenerProyectos());
  };

  const seleccionar = (proyecto) => {
    // Si hacemos clic en el mismo, lo cerramos (toggle)
    setProyectoSeleccionado(proyectoSeleccionado?.id === proyecto.id ? null : proyecto);
  };

  return (
    <section className="proyectos">
      <Titulo />
      <div className="contenedor-formulario">
        <div className="seccion-formulario">
          <h4>1. Informacion General</h4>
          <div className="grid-input">
            <input
              type="number"
              placeholder="ID"
              value={nuevoProyecto.id}
              onChange={(e) => setNuevoProyecto({ ...nuevoProyecto, id: e.target.value })}
            />
            <input
              type="text"
              placeholder="Titulo"
              value={nuevoProyecto.titulo}
              onChange={(e) => setNuevoProyecto({ ...nuevoProyecto, titulo: e.target.value })}
            />
            <input
              type="text"
              placeholder="Categoria"
              value={nuevoProyecto.categoria}
              onChange={(e) => setNuevoProyecto({ ...nuevoProyecto, categoria: e.target.value })}
            />
            <input
              type="text"
              placeholder="Estado"
              value={nuevoProyecto.estado}
              onChange={(e) => setNuevoProyecto({ ...nuevoProyecto, estado: e.target.value })}
            />
          </div>
        </div>

        <div className="seccion-formulario">
          <h4>2. Integrantes </h4>
          <div className="grid-input">
            <input
              type="text"
              placeholder="Nombre del Integrante"
              value={nuevoProyecto.nombreIntegrantes}
              onChange={(e) => setNuevoProyecto({ ...nuevoProyecto, nombreIntegrantes: e.target.value })}
            />
            <input
              type="text"
              placeholder="Rol del Integrante"
              value={nuevoProyecto.rolIntegrantes}
              onChange={(e) => setNuevoProyecto({ ...nuevoProyecto, rolIntegrantes: e.target.value })}
            />
          </div>
        </div>

        <button className="btn-agregar" onClick={agregar}>Agregar</button>
      </div>

      <div className="seccion-busqueda">
        <label>Filtrar por título:</label>
        <input
          type="text"
          placeholder="Escriba para buscar: "
          value={buscado}
          onChange={(e) => buscar(e.target.value)}
        />
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NOMBRE</th>
            <th>CATEGORIA</th>
            <th>ESTADO</th>
            <th>ACCIONES</th>
          </tr>
        </thead>
        <tbody>
          {proyectos.map((proyecto) => (
            <tr key={proyecto.id}>
              <td>{proyecto.id}</td>
              <td>{proyecto.titulo}</td>
              <td>{proyecto.categoria}</td>
              <td>{proyecto.estado}</td>
              <td>
                <button className="btn-ver" onClick={() => seleccionar(proyecto)}>
                  {proyectoSeleccionado?.id === proyecto.id ? "Cerrar" : "Ver"}
                </button>
                <button className="btn-eliminar" onClick={() => eliminar(proyecto.id)}>Eliminar</button>
              </td>
            </tr>
          ))}

        </tbody>
      </table>

      {proyectoSeleccionado && (
        <div className="detalle-seleccionado">
          <hr />
          <h2>Detalles de: {proyectoSeleccionado.titulo}</h2>
          <DetalleProyecto proyecto={proyectoSeleccionado} />
        </div>
      )}
    </section>
  );
};