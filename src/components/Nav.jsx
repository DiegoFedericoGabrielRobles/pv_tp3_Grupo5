import { NavLink } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

export const Navegador = () => {
    return (
         <AppBar position="static">
            <Toolbar>
                <Button color="inherit" component={NavLink} to="/"> Inicio </Button>
                <Button color="inherit" component={NavLink} to="/proyectos"> Proyectos </Button>
                <Button color="inherit" component={NavLink} to="/perfil"> Perfil </Button>
            </Toolbar>
        </AppBar>
    );
};
