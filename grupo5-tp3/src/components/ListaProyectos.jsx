import {useState} from "react";
import { proyectoService } from "../services/proyectoService";

export const ListaProyectos = () => {
    const [proyectos, setProyectos] = useState(proyectoService.obtenerProyectos());

    const [nuevoProyecto, setNuevoProyecto] = useState({
        titulo: "",
        categoria: "",
        estado: ""
    });

    const agregar = () => {
        proyectoService.agregarProyecto({...nuevoProyecto});

        setProyectos(proyectoService.obtenerProyectos());

        setNuevoProyecto({
        id:"",
        titulo:"",
        categoria:"",
        estado:""
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
            <h3> Lista Proyectos </h3>
            <label> Buscar </label>
            <input type="text" placeholder="Buscar..." value={buscado} onChange={(e) => buscar(e.target.value)}/>

            <table> 
                <thead> 
                    <th> ID </th>
                    <th> NOMBRE </th>
                    <th> CATEGORIA </th>
                    <th> ESTADO </th>
                </thead>
                <tbody> 
                    {proyectos.map((proyecto) => (
                    <tr key={proyecto.id}>
                        <td>{proyecto.id}</td>
                        <td>{proyecto.titulo}</td>
                        <td>{proyecto.categoria}</td>
                        <td>{proyecto.estado}</td>
                        <td><button onClick={() => eliminar(proyecto.id)}> Eliminar </button></td>
                    </tr>
                    ))}
                    <tr>
                        <td> <input type="number" placeholder="Id" value={nuevoProyecto.id} onChange={(n) => setNuevoProyecto({...nuevoProyecto,id: n.target.value})} /> </td>
                        <td> <input type="text" placeholder="Titulo" value={nuevoProyecto.titulo} onChange={(n) => setNuevoProyecto({...nuevoProyecto,titulo: n.target.value})}/> </td>
                        <td> <input type="text" placeholder="Categoria" value={nuevoProyecto.categoria} onChange={(n) => setNuevoProyecto({...nuevoProyecto,categoria: n.target.value})}/> </td>
                        <td> <input type="text" placeholder="Estado" value={nuevoProyecto.estado} onChange={(n) => setNuevoProyecto({...nuevoProyecto,estado: n.target.value})}/> </td>
                        <td><button onClick={() => agregar()}> Agregar </button> </td>
                    </tr>
                </tbody>
            </table>
        </section>
    );  
};