import { Box, Container } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from "react-router-dom";

const CartHeading = () => {
    const navigate = useNavigate();
    const backClick = () => navigate(-1)
    return(
        <>
            <Container maxWidth="sm">
                <Box
                    sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    p: 1,
                    m: 1,
                    bgcolor: 'background.paper',
                    borderRadius: 1,
                    }}
                >
                    <CloseIcon onClick={backClick} />
                    <item>Your Cart (count): Total</item>
                </Box>
            </Container>
        </>
    )
};

export default CartHeading;