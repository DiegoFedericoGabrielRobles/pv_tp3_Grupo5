import Typography from "@mui/material/Typography";

export const TituloUno = ({ titulo }) => {
    return (
        <Typography variant="h6" component="h3" sx={{ fontWeight: 600 }}>
            {titulo}
        </Typography>
    );
};