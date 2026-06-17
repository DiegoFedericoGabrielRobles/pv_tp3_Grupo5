export const proyectoService = ( () =>{
    const proyectos = [
        {
            id: 1, 
            titulo: "Ahorcado",
            categoria: "Video Juego",
            estado: "Finalizado",
            integrantes: [
                {nombre:"Diego",rol:"Frontend"},
                {nombre:"Lucia",rol:"Diseñadora UI"},
                {nombre:"Martin",rol:"Backend"}
            ], 
            descripcion:"Ahorcado es un videojuego educativo e interactivo desarrollado con el objetivo de reforzar el aprendizaje de palabras mediante una dinámica clásica y entretenida. El proyecto permite al usuario ingresar letras para descubrir palabras ocultas, mostrando de manera visual los intentos restantes y el progreso de la partida en tiempo real.\n\nEl sistema fue desarrollado utilizando tecnologías web modernas, enfocándose en la manipulación dinámica del DOM y la experiencia del usuario. Además, se implementaron animaciones, validaciones y diferentes categorías de palabras para hacer la experiencia más atractiva y desafiante.",
            enlaces:{
                github:"#",
                pdf:"#",
                drive:"#"
            }
        },
        {
            id: 2,
            titulo: "Vida Planeta",
            categoria: "Medio Ambiente",
            estado: "En Curso",
            integrantes: [
                {nombre:"Sofia",rol:"Investigadora"},
                {nombre:"Camila",rol:"Diseñadora"}
            ],
            descripcion:"Vida Planeta es una plataforma orientada a la concientización ambiental y al cuidado de los recursos naturales. El proyecto busca informar a las personas sobre problemáticas actuales relacionadas con la contaminación, el reciclaje y el cambio climático mediante contenido visual e interactivo.\n\nLa aplicación incluye secciones educativas, recomendaciones ecológicas y estadísticas relacionadas con el impacto ambiental. También se está trabajando en funcionalidades que permitan a los usuarios registrar hábitos sustentables y participar en campañas ecológicas comunitarias.",
            enlaces:{
                github:"#",
                pdf:"#",
                drive:"#"
            }
        },
        {
            id: 3,
            titulo: "Taller de Robotica",
            categoria: "Tecnologia",
            estado: "Finalizado",
            integrantes: [
                {nombre:"Juan",rol:"Programador"},
                {nombre:"Valentina",rol:"Electronica"},
                {nombre:"Diego",rol:"Diseñador"}
            ],
            descripcion: "Taller de Robótica es un proyecto educativo enfocado en introducir a los estudiantes en el mundo de la programación y la automatización. Durante el desarrollo del proyecto se trabajó con sensores, motores y placas programables para construir prototipos funcionales.\n\nEl sistema también cuenta con una plataforma web donde se documentan prácticas, tutoriales y avances de los distintos equipos. El objetivo principal fue fomentar el pensamiento lógico, la creatividad y el trabajo colaborativo mediante experiencias tecnológicas reales.",
            enlaces:{
                github:"#",
                pdf:"#",
                drive:"#"
            }
        },
        {
            id: 4,
            titulo: "Hablemos un poco",
            categoria: "Comunicacion",
            estado: "En Curso",
            integrantes: [
                {nombre:"Ruben",rol:"Escritor"},
                {nombre:"Milagros",rol:"Investigadora"},
                {nombre:"Sofia",rol:"Editora"},
                {nombre:"Diego",rol:"Lector"}
            ],
            descripcion:"Hablemos un Poco es un espacio digital pensado para promover la comunicación, la expresión y el intercambio de ideas entre jóvenes estudiantes. El proyecto propone actividades, entrevistas y publicaciones que fomentan el diálogo sobre diferentes temas sociales y culturales.\n\nActualmente se están desarrollando herramientas interactivas que permitan a los usuarios compartir opiniones, participar en debates y acceder a contenido multimedia. La plataforma busca generar un entorno inclusivo y dinámico donde cada participante pueda expresarse libremente.",
            enlaces:{
                github:"#",
                pdf:"#",
                drive:"#"
            }
        },
        {
            id: 5,
            titulo: "Sumergirse en Libros",
            categoria: "Literatura",
            estado: "En Curso",
            integrantes: [
                {nombre:"Diego",rol:"Frontend"},
                {nombre:"Lucas",rol:"Backend"},
                {nombre:"Matias",rol:"Diseñador"}
            ],
            descripcion:"Hablemos un Poco es un espacio digital pensado para promover la comunicación, la expresión y el intercambio de ideas entre jóvenes estudiantes. El proyecto propone actividades, entrevistas y publicaciones que fomentan el diálogo sobre diferentes temas sociales y culturales.\n\nActualmente se están desarrollando herramientas interactivas que permitan a los usuarios compartir opiniones, participar en debates y acceder a contenido multimedia. La plataforma busca generar un entorno inclusivo y dinámico donde cada participante pueda expresarse libremente.",
            enlaces:{
                github:"#",
                pdf:"#",
                drive:"#"
            }
        },
    ];

    const obtenerProyectos = () => ( [...proyectos] );

    const agregarProyecto = (nuevoProyecto) => {
        const nuevoId = Math.max(...proyectos.map(p => p.id)) + 1;

        proyectos.push({
            id: nuevoId,
            ...nuevoProyecto
        });
    };

    const eliminarProyecto = (id) =>{
        const indice = proyectos.findIndex( proyecto => proyecto.id === Number(id));
        if (indice !== -1) {
            proyectos.splice(indice,1)
        };
    };

    const buscarProyecto = (buscado) => {
        return (proyectos.filter(p => p.titulo.toLowerCase().includes(buscado.toLowerCase())));
    };

    return {obtenerProyectos, agregarProyecto, eliminarProyecto, buscarProyecto};

})();


