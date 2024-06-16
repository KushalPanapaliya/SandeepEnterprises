import { Box, Button } from "@mui/material";


const OrderNow = () => {
    return(
        <>
            <Box
            sx={{
            display: 'flex',
            flexDirection: 'column',
            p: 1,
            m: 1,
            bgcolor: 'background.paper',
            borderRadius: 1,
            }}
        >
            <Button display="block" variant="contained">Check out</Button>
            <Button display="block" variant="outlined">Pay Now</Button>
        </Box>
        </>
    );
}

export default OrderNow