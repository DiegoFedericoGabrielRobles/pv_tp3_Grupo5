import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";

export const ProyectoCard = ({ proyecto, eliminar }) => {
   const { titulo, estado, categoria } = proyecto;

    return (
        <Card>
            <CardContent>
                <Typography variant="h5">
                    {titulo}
                </Typography>

                <Typography>
                    Estado: {estado}
                </Typography>

                <Typography>
                    Categoría: {categoria}
                </Typography>
            </CardContent>

            <CardActions>
                <Button type="button" size="small" component={NavLink} to={`/proyectos/${proyecto.id}`}> Ver detalle </Button>
                <Button type="button" size="small" color="error" onClick={() => eliminar(proyecto.id)}> Eliminar </Button>
            </CardActions>
        </Card>
    );
};
