export const Integrantes = ({integrantes,}) => {
    return (
         <div  className="contenedor-integrantes">
            {integrantes.map((integrante,index)=>(
                <div key={integrante.id} className="card-integrantes">
                    <p>Nombre:{integrante.nombre}</p>
                    <p>Rol:{integrante.rol}</p>
                </div>
            ))}
        </div>
    )
};