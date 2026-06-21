import { useState } from "react";
import { useUsuario } from "../context/UsuarioContext";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export const PerfilUsuario = () => {
    const { usuario, actualizarPerfil } = useUsuario();
    const [editando, setEditando] = useState(false);
    const [form, setForm] = useState({ ...usuario });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleGuardar = () => {
        actualizarPerfil(form);
        setEditando(false);
    };

    const handleCancelar = () => {
        setForm({ ...usuario });
        setEditando(false);
    };

    return (
        <Card sx={{ maxWidth: 600, margin: "auto", mt: 4 }}>
            <CardContent>
                <Typography variant="h4" gutterBottom> Perfil de Usuario </Typography>

                {editando ? (
                    <>
                        <TextField
                            label="Nombre"
                            name="nombre"
                            value={form.nombre}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="DNI"
                            name="dni"
                            value={form.dni}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Rol"
                            name="rol"
                            value={form.rol}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Institución"
                            name="institucion"
                            value={form.institucion}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                        />
                        <Button variant="contained" onClick={handleGuardar} sx={{ mt: 2, mr: 1 }}>Guardar</Button>

                        <Button variant="outlined" onClick={handleCancelar} sx={{ mt: 2 }}>Cancelar</Button>
                    </>
                ) : (
                    <>
                        <Typography> Nombre: {usuario.nombre} </Typography>
                        <Typography> DNI: {usuario.dni} </Typography>
                        <Typography> Rol: {usuario.rol} </Typography>
                        <Typography> Institución: {usuario.institucion} </Typography>
                        <Button variant="contained" onClick={() => setEditando(true)} sx={{ mt: 2 }}>Editar Perfil</Button>
                    </>
                )}
            </CardContent>
        </Card>
    );
};