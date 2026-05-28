export const DetalleProyecto = ({proyecto}) => {
    return (
         <div>
            <p>{proyecto.descripcion}</p>
            {
                proyecto.integrantes.map((integrante)=>(
                    <>
                        <p>{integrante.nombre}</p>
                        <p>{integrante.rol}</p>
                    </>
                ))
            }
            
            <p>{proyecto.enlaces.github}</p>
            <p>{proyecto.enlaces.pdf}</p>
            <p>{proyecto.enlaces.drive}</p>

        </div>
    )
};

