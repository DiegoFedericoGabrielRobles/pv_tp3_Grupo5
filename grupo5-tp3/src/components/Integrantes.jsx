export const Integrantes = ({integrantes}) => {
    return (
         <div  className="contenedor-integrantes">
            {integrantes.map((integrante)=>(
                <div className="card-integrantes">
                    <p>Nombre:{integrante.nombre}</p>
                    <p>Rol:{integrante.rol}</p>
                </div>
            ))}
        </div>
    )
};