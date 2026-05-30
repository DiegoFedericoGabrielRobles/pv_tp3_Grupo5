import React from "react";
import { Integrantes } from "./Integrantes";

export const DetalleProyecto = ({proyecto}) => {
    const { descripcion, integrantes } = proyecto;
    return (
        <div className="contenedor-detalle">
            <h3>DESCRIPCION</h3>
            <p>{descripcion}</p>

            <h3>INTEGRANTES</h3>
            <Integrantes integrantes={integrantes}> </Integrantes>
        </div>
    )
};
