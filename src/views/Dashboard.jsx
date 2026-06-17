import { proyectoService } from "../services/proyectoService";
import { TituloDos } from "../components/TituloDos";
import { TituloTres } from "../components/TituloTres";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

export const Dashboard = () => {
    const proyectos = proyectoService.obtenerProyectos();

    const totalProyectos = proyectos.length;
    const proyectosEnCurso = proyectos.filter(proyecto => proyecto.estado === "En Curso").length;
    const proyectosFinalizados = proyectos.filter(proyecto => proyecto.estado === "Finalizado").length;

    return (
        <>
            <Container maxWidth="lg">
                <Box sx={{ mt: 5 }}>
                    <TituloDos titulo="BIENVENIDOS A LA PLATAFORMA" />

                    <Box sx={{ mb: 4 }}>
                        <TituloTres titulo="VISIÓN GENERAL" />
                        <Typography>Creemos que los grandes cambios educativos nacen de la colaboración. Por eso, creamos un espacio dinámico donde las comunidades escolares pueden co-crear proyectos, compartir recursos y hacer visible el progreso de sus alumnos. Desde el aula hasta la comunidad, facilitamos las herramientas necesarias para que cada idea se convierta en una experiencia de aprendizaje inolvidable.</Typography>
                    </Box>

                    <Grid container spacing={3}>

                        <Grid item xs={12} md={4}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h6"> Total de proyectos </Typography>
                                    <Typography variant="h4"> {totalProyectos} </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h6"> Proyectos en curso </Typography>
                                    <Typography variant="h4"> {proyectosEnCurso} </Typography>
                                </CardContent>
                            </Card>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h6"> Proyectos finalizados </Typography>
                                    <Typography variant="h4"> {proyectosFinalizados} </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    );
};
