// src/components/Nav.jsx
import React from 'react';

const Nav = () => {
    return (
        <nav>
            <ul className="nav-links">
                <li><a href="#">Detalles</a></li>
                <li><a href="#">Perfil</a></li>
                <li><a href="/">Inicio</a></li>
            </ul>
        </nav>
    );
};

export default Nav;