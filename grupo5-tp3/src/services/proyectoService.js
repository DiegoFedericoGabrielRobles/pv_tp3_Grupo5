export const proyectoService = (() =>{


const proyectos = [
    {
        id:1, titulo: "ahorcado", categoria: "Videojuego", estado: "finalizado"
    },
    {
        id:2, titulo: "Vida planeta", categoria: "Medio ambiente", estado: "en curso"
    },
    {
        id:3, titulo: "taller de robotica", categoria: "Tecnologia", estado: "finalizado"
    },
    {
        id:4, titulo: "Hablemos un poco de todo", categoria: "Comunicación", estado: "en curso"
    },
    {
        id:5, titulo: "sumergirse en los libros", categoria: "Literatura", estado: "en curso"
    }
]


const obtenerProyectos = () => [...proyectos];

const agregarProyecto = ({titulo, categoria, estado}) => {
    const nuevoProyecto = {
        id: proyectos.length + 1,
        titulo,
        categoria,
        estado
    };
    proyectos.push(nuevoProyecto);
}

const eliminarProyecto = (idProyecto) => {
    const indice = proyectos.findIndex(
        proyecto => proyecto.id === idProyecto);
        if (indice !== -1) {
            proyectos.splice(indice, 1)
        }
};

const buscarProyecto = (nombre) => proyectos.filter(proyecto => proyecto.titulo.toLowerCase().includes(nombre.toLowerCase()));

return {obtenerProyectos, agregarProyecto, eliminarProyecto, buscarProyecto};

})();
