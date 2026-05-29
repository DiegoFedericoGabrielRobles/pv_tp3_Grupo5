import {useState} from "react";
import { proyectoService } from "../services/proyectoService";

export const ListaProyectos = () => {
    const [proyectos, setProyectos] = useState(proyectoService.obtenerProyectos());

    const [nuevoProyecto, setNuevoProyecto] = useState({
        id: "",
        titulo: "",
        categoria: "",
        estado: "",
        descripcion: "",
        integrantes: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNuevoProyecto({
            ...nuevoProyecto,
            [name]: value
        });
    };

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
            integrantes: ""
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
                    <tr>
                        <th> ID </th>
                        <th> NOMBRE </th>
                        <th> CATEGORIA </th>
                        <th> ESTADO </th>
                    </tr>    
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
                        <td> <input type="number" placeholder="Id" name="id" value={nuevoProyecto.id} onChange={handleChange} /> </td>
                        <td> <input type="text" placeholder="Titulo" name="titulo" value={nuevoProyecto.titulo} onChange={handleChange}/> </td>
                        <td> <input type="text" placeholder="Categoria" name="categoria" value={nuevoProyecto.categoria} onChange={handleChange}/> </td>
                        <td> <input type="text" placeholder="Estado" name="estado" value={nuevoProyecto.estado} onChange={handleChange}/> </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <input 
                                type="text" 
                                placeholder="Integrantes (Nombre y Rol)" 
                                name="integrantes" 
                                value={nuevoProyecto.integrantes} 
                                onChange={handleChange} 
                                style={{ width: "90%" }}
                            />
                        </td>
                        <td colSpan="2">
                            <input 
                                type="text" 
                                placeholder="Descripción" 
                                name="descripcion" 
                                value={nuevoProyecto.descripcion} 
                                onChange={handleChange} 
                                style={{ width: "90%" }}
                            />
                        </td>
                        <td>
                            <button onClick={() => agregar()}> Agregar </button> 
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
    );  
};