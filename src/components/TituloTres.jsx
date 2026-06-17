import Typography from "@mui/material/Typography";

export const TituloTres = ({ titulo }) => {
    return (
        <Typography variant="h6" component="h3"  sx={{ mb: 1 }}>
            {titulo}
        </Typography>
    );
};