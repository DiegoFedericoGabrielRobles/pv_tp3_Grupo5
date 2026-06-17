import { useParams } from "react-router-dom";
import { proyectoService } from "../services/proyectoService";
import { Integrantes } from "./Integrantes";
import { TituloTres } from "./TituloTres";
import { TituloDos } from "./TituloDos";

export const DetalleProyecto = () => {
    const { id } = useParams();
    const proyecto = proyectoService.obtenerProyectos().find((p) => p.id === Number(id));

    if (!proyecto) {
        return <p> Proyecto no encontrado </p>;
    }

    const { titulo, descripcion, integrantes, enlaces } = proyecto;

    return (
         <div className="contenedor-detalle">
            <TituloDos titulo={titulo}></TituloDos>
            <TituloTres titulo={"DESCRIPCION"} ></TituloTres>
            <p>{descripcion}</p>

            <TituloTres titulo={"INTEGRANTES"}></TituloTres>
            <Integrantes integrantes={integrantes}> </Integrantes>
            
            <TituloTres titulo={"ENLACES"}></TituloTres>
            <ul className="contenedor-enlaces">
                <li><a href={enlaces.github}> GITHUB </a></li>
                <li><a href={enlaces.pdf}> PDF </a></li>
                <li><a href={enlaces.drive}> DRIVE </a></li>
            </ul>
        </div>
    );
};
