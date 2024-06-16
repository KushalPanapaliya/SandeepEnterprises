import CartCard from "./CartCard";
import Box from '@mui/material/Box';

const CartContaints = ()=>{
    return(
        <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          flexDirection: 'column',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
          borderRadius: 1,
        }}
      >
        <CartCard />
        <CartCard />
        <CartCard />
      </Box>
)};

export default CartContaints;