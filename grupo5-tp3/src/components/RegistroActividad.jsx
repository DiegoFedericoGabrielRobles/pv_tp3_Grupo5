import React from "react";
export const RegistroActividad = ({fecha}) => {
    return (
        <div className="contenedor-registro-actividad">
            <p>Ultima Modificacion de la Lista: {fecha}</p>
        </div>
    );
};