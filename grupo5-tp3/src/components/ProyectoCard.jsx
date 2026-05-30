export const ProyectoCard = ({proyecto}) => {
    return (
        <div className="card-proyecto">
            <h3>{proyecto.titulo}</h3>
            <p>{proyecto.estado}</p>
            <p>{proyecto.categoria}</p>
        </div>
    );
};
