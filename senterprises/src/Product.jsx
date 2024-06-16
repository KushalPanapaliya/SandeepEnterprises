import Rating from '@mui/material/Rating';
import {useParams, useNavigate} from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Badge, Box, Button, Container, Divider, Grid, IconButton, Typography } from '@mui/material';
import AddBoxSharpIcon from '@mui/icons-material/AddBoxSharp';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Product(){
    const [product, setProduct] = useState({});
    const params = useParams();
    //const productId = params.productId;
    const navigate = useNavigate();
    const backClick = () => navigate(-1)
    const cartClick = () => navigate("/cart")
    useEffect(() => {
        axios.get("http://localhost:8080/product/"+params.productId)
        .then(response => setProduct(response.data))
        .catch(error => console.log(error));
    }, []);
    console.log(product.id);
    return (
        <Container maxWidth='sm'>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <ArrowBackIosNewIcon onClick={backClick} />
                </Grid>
                <Grid item xs={6}>
                <IconButton aria-label="cart">
                    <Badge badgeContent={4} color="secondary">
                        <ShoppingCartIcon onClick={cartClick}/>
                    </Badge>
                </IconButton>
                </Grid>
            </Grid>
            
            <Box sx={{ height: '100%' }} >
                <img src={product.imageUrl} 
                    alt="product" 
                    width='auto'
                    height="300"
                    />
                
                <h3 className="heading">Product Name: {product.name}</h3>
                <p className="heading">Product Description: {product.description}</p>
                <div className="heading">
                    <h2>Prize</h2>
                    <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                    
                    <Button variant="contained" sx={{width:'100%'}} >
                        <AddBoxSharpIcon size="large" />
                        <Typography variant="subtitle1" gutterBottom >
                            Add to Cart
                        </Typography>
                        <Divider orientation="vertical" variant="middle" flexItem />
                        <Typography variant="h6" gutterBottom >
                            ${product.price}
                        </Typography>
                    </Button>
                </div>
            </Box>
        </Container>
    );
}

export default Product;