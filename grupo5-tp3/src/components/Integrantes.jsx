export const Integrantes = ({integrantes}) => {
    return (
         <div  className="contenedor-integrantes">
            {integrantes.map((integrante, index)=>(
                <div className="Integrantes" key={index}>
                    <p>Nombre:{integrante.nombre}</p>
                    <p>Rol:{integrante.rol}</p>
                </div>
            ))}
        </div>
    )
};