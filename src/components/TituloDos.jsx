import Typography from "@mui/material/Typography";

export const TituloDos = ({ titulo }) => {
    return (
        <Typography variant="h4" component="h2" sx={{ mb: 2 }}>
            {titulo}
        </Typography>
    );
};