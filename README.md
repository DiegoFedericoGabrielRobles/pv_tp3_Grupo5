# Trabajo Práctico N.º 3 – Programación Visual – Grupo 5

## Descripción

Este trabajo práctico consiste en la evolución de la plataforma de **Gestión de Proyectos Educativos**, migrando su versión desarrollada en HTML, CSS y JavaScript hacia una aplicación moderna construida con **React** y **Vite**.

Durante el desarrollo se aplicaron conceptos fundamentales de React, como la creación y reutilización de componentes, manejo de estado mediante Hooks, separación de lógica en módulos de servicio, renderizado dinámico de información, uso de estado global mediante Context API e integración con bibliotecas de componentes visuales.

La aplicación permite administrar proyectos educativos de manera interactiva, facilitando su visualización, búsqueda, agregado y eliminación en tiempo real.

---

## Integrantes

- **Gutiérrez Camila Gimena** — `CamilaGGutierrez`
- **Robles Diego** — `DiegoFedericoGabrielRobles`
- **Meriles Aaron** — `AaronMeriles`
- **Ponzetti Juan** — `JuanPoNZEtti`

---

## Tecnologías Utilizadas

### React
Desarrollo basado en componentes reutilizables.

### Vite
Entorno de desarrollo rápido para aplicaciones modernas.

### Hooks de React utilizados

- `useState`
- `useEffect`
- `useRef`
- `useContext`

### React Router DOM
Navegación entre vistas mediante rutas.

### Context API
Implementación de estado global para la gestión del perfil de usuario.

### LocalStorage
Persistencia de la información del usuario frente a recargas de la aplicación.

### Material UI
Biblioteca de componentes para mejorar la interfaz gráfica.

### JavaScript ES6+
Programación modular y manipulación dinámica de datos.

---

## Funcionalidades Implementadas

✔ Visualización dinámica de proyectos  
✔ Búsqueda en tiempo real  
✔ Agregado de nuevos proyectos  
✔ Eliminación de proyectos  
✔ Vista detallada de proyectos mediante parámetros dinámicos (`useParams`)  
✔ Registro de última modificación  
✔ Componentes reutilizables  
✔ Navegación entre páginas con React Router  
✔ Interfaz modernizada mediante Material UI  
✔ Separación entre lógica y presentación  
✔ Gestión global del perfil mediante Context API  
✔ Edición dinámica del perfil de usuario  
✔ Actualización automática del encabezado según los cambios del perfil  
✔ Persistencia de datos mediante LocalStorage  

---

## Estructura del Proyecto

src/
│
├── components/
│   ├── Header.jsx
│   ├── Nav.jsx
│   ├── Footer.jsx
│   ├── ProyectoCard.jsx
│   ├── FormularioProyecto.jsx
│   ├── DetalleProyecto.jsx
│   ├── RegistroActividad.jsx
│   ├── TituloUno.jsx
│   ├── TituloDos.jsx
│   └── TituloTres.jsx
│
├── context/
│   └── UsuarioContext.jsx
│
├── views/
│   ├── Dashboard.jsx
│   ├── ListaProyectos.jsx
│   └── PerfilUsuario.jsx
│
├── services/
│   └── proyectoService.js
│
├── css/
│   └── style.css
│
├── App.jsx
└── main.jsx

---

## Objetivos Académicos

Este trabajo permitió aplicar y reforzar conocimientos sobre:

- Programación modular.
- Componentes reutilizables.
- Renderizado dinámico.
- Manejo de estado en React.
- Hooks y ciclo de vida.
- Estado global mediante Context API.
- Persistencia de datos con LocalStorage.
- Organización escalable de proyectos.
- Navegación entre vistas.
- Uso de bibliotecas de componentes visuales.
- Separación entre lógica de negocio e interfaz gráfica.

---

## Tecnologías Principales

- React
- Vite
- React Router DOM
- Context API
- Material UI
- JavaScript ES6+