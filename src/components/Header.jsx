import { TituloUno } from "./TituloUno";
import logo from "../assets/logo.png";

export const Header = () => {
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

        </header>
    );
};
