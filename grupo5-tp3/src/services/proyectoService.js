export const proyectoService = (() =>{


const proyectos = [
    {
        id:1, titulo: "ahorcado", categoria: "Videojuego", estado: "finalizado",
        descripcion:"Un proyecto para crear entre compañeros el famoso juego del 'Ahorcado' usando el lenguaje de programación C++. Un juego simple y sencillo para los estudiantes que están aprendiedo programación puedan hacerlo y aprender sobre programación de videojuegos. Aprenderemos desarrollo de efectos visuales, efectos de sonido, musica en los videojuegos, y mucho mas. ",
        enlaces:{github: "#", pdf: "#", drive: "#" },
        integrantes: [
        {
            nombre: "Gonzalo Rios",
            rol: "programador"
        },
        {
            nombre: "Christina del Campo",
            rol: "Analista de datos"
        },
        {
            nombre: "Nicolas Montero",
            rol: "productor musical"
        }
    ]
    },

    {
        id:2, titulo: "Vida planeta", categoria: "Medio ambiente", estado: "en curso", 
        descripcion:"Un proyecto educar y enseñarle a los niños lo importante que es cuidar el planeta. Tambien enseñaremos que el ahorro de recursos es muy importante como promover el cuidado del agua. Vamos a enseñar a Reducir, Reciclar y Reutilizar los materiales, vamos a hacer manualidades divertidas para que los niños puedan disfrutar de reciclar materiales. Esperamos que los mas pequeños puedan amar la naturaleza porque es tan importante",
        enlaces:{github: "#", pdf: "#", drive: "#" },
        integrantes: [
        {
            nombre: "Rodrigo Salazar",
            rol: "Consejero",
        },
        {
            nombre: "Benja Castaño",
            rol: "maestro"
        },
        {
            nombre: "Maxi Colque",
            rol: "ayudante"
        }
    ]
    },
    {
        id:3, titulo: "taller de robotica", categoria: "Tecnologia", estado: "finalizado", 
        descripcion:" Un proyecto practico para aprender de robotica, donde vamos a aprender a construir robots desde 0. En este taller usaremos los lenguajes de programación Python y C++ que son los estandares principales en este mundo. El objetivo de este taller es que los participantes puedan aprender de robotica y abrir una pasión en ellos",
        enlaces:{github: "#", pdf: "#", drive: "#" },
        integrantes: [
        {
            nombre: "Aaron Meriles",
            rol: "programador",
        },
        {
            nombre: "Diego Robles",
            rol: "Ingeniero mecanico"
        },
        {
            nombre: "Camila Gutierrez",
            rol: "Ingeniera electrica"
        },
        {
            nombre: "Juan Ponzetti",
            rol: "ingeniero de software"
        }
        ],
    },
    {
        id:4, titulo: "Hablemos un poco de todo", categoria: "Comunicación", estado: "en curso", 
        descripcion:"Un podcast educativo para los amantes de la comunicación donde cualquiera puede unirse y compartir conocimientos o historias interesantes. Hablamos sobre algunos temas del dia y tendencias. Buscamos que los jovenes se desenvuelvan y que pierdan el miedo a hablar en publico, y ademas es un podcast libre donde lo mejor es escuchar los conocimientos de cada estudiantes y anecdotas divertidas e interesantes para divertirse entre todos.",
        enlaces:{github: "#", pdf: "#", drive: "#" },
        integrantes: [
        {
            nombre: "Luis Garcia",
            rol: "conductor",
        },
        {
            nombre: "Marcela Padilla",
            rol: "coordinadora"
        },
        {
            nombre: "Martina Paz",
            rol: "productora de sonido"
        }
    ]
        
    },
    {
        id:5, titulo: "sumergirse en los libros", categoria: "Literatura", estado: "en curso", 
        descripcion:"Un proyecto para insitar a los jovenes a leer mas. Podria parecer un poco aburrido cuando uno empieza pero por eso en este proyecto buscamos acompañar a cada uno. Al finalizar la hora de lectura hacemos un espacio para que cada uno cuente que leyeron y lo que estan aprendiendo. Nuestro objetivo es que los jovenes puedan disfrutar leer libros que es una herramienta muy importante para la vida.",
        enlaces:{github: "#", pdf: "#", drive: "#" },
        integrantes: [
        {
            nombre: "Santiago Ance",
            rol: "coordinador",
        },
        {
            nombre: "Joaquin Alfaro",
            rol: "coordinador"
        },
        {
            nombre: "Sofia Cardozo",
            rol: "coordinadora"
        }
    ]
    }
]

const obtenerProyectos = () => [...proyectos];

const agregarProyecto = (nuevoProyecto) => {
        const nuevoId = Math.max(...proyectos.map(p => p.id)) + 1;
        proyectos.push({
            id: nuevoId,
            ...nuevoProyecto
        });
    };

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
