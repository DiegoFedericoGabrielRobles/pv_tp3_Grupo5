import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export const PerfilUsuario = () => {
    return (
        <Card sx={{ maxWidth: 600, margin: "auto", mt: 4 }}>
            <CardContent>
                <Typography variant="h4" gutterBottom> Perfil de Usuario </Typography>
                <Typography> Nombre: Diego Robles </Typography>
                <Typography> Rol: Alumno </Typography>
                <Typography> Institución: Facultad de Ingeniería - UNJu </Typography>
            </CardContent>
        </Card>
    );
};