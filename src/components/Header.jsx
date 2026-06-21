import { TituloUno } from "./TituloUno";
import logo from "../assets/logo.png";
import { useUsuario } from "../context/UsuarioContext";

export const Header = () => {
    const { usuario } = useUsuario();

    return (
        <header className="header">

            <img
                src={logo}
                alt="Logo"
                className="logo-header"
            />

            <div className="header-info">
                <TituloUno titulo="GESTIÓN DE PROYECTOS EDUCATIVOS" />

                <p className="subtitulo-header">
                    Plataforma colaborativa para la gestión de proyectos
                </p>
            </div>

            <div style={{ position: "absolute", top: "15px", right: "40px", color: "white" }}>
                <strong>{usuario.nombre}</strong> — {usuario.rol}
            </div>

        </header>
    );
};