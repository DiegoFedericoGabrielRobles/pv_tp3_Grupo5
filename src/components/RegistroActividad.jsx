import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";

export const RegistroActividad = ({fecha}) => {
    return (
         <Box sx={{ mt: 4 }}>
            <Alert severity="success"> Ultima modificación: {fecha} </Alert>
        </Box>
    );
};