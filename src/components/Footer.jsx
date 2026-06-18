import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const Footer = () => {
    return (
        <Box
            component="footer"
            className="footer"
            sx={{
                textAlign: "center",
                py: 3,
                mt: 4,
            }}
        >
            <Typography variant="h6">
                Plataforma Educativa
            </Typography>
            <Typography variant="caption">
                © 2026 - Programación Visual
            </Typography>
        </Box>
    );
};