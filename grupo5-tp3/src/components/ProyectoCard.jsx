export const ProyectoCard = ({proyecto}) => {
    return (
        <div>
            <h3>{proyecto.titulo}</h3>
            <p>{proyecto.estado}</p>
            <p>{proyecto.categoria}</p>
        </div>
    );
};
