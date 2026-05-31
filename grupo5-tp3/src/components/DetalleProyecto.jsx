import React from "react";
import { Integrantes } from "./Integrantes";

export const DetalleProyecto = ({proyecto}) => {
    const { descripcion, integrantes, recursos } = proyecto;
    return (
        <div className="contenedor-detalle">
            <h3>DESCRIPCION</h3>
            <p>{descripcion}</p>

            <h3>INTEGRANTES</h3>
            <Integrantes integrantes={integrantes}> </Integrantes>

            <h3> RECURSOS </h3>
            <ul className="contenedor-enlaces">
                <li><a href={recursos.github}> GITHUB </a></li>
                <li><a href={recursos.pdf}> PDF </a></li>
                <li><a href={recursos.drive}> DRIVE </a></li>
            </ul>
        </div>
    )
};
