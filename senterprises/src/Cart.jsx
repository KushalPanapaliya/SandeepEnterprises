
import { Container } from "@mui/material";
import CartContaints from "./CartContaints";
import CartHeading from "./CartHeading";
import FreeDelivery from "./FreeDelivery";
import OrderNow from "./OrderNow";
import Total from "./Total";

function Cart() { 
    return(
    <>
        <Container maxWidth="sm">
            <CartHeading />
            <FreeDelivery />
            <CartContaints />
            <Total />
            <OrderNow />
        </Container>
    </>
)};

export default Cart;