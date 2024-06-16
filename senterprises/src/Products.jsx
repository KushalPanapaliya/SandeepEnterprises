import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Container, Typography } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import axios from "axios";

const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
      title: 'Bed',
      price: '$20',
    },
    {
      img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
      title: 'Books',
      price: '$10',
    },
    {
      img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
      title: 'Sink',
      price: '$12',
    },
    {
      img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
      title: 'Kitchen',
      price: '$14',
    },
    {
      img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
      title: 'Blinds',
      price: '$55',
    },
    {
      img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
      title: 'Chairs',
      price: '$99',
    },
    {
      img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
      title: 'Laptop',
      price: '$34',
    },
    {
      img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
      title: 'Doors',
      price: '$110',
    },
    {
      img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
      title: 'Coffee',
      price: '$22',
    },
    {
      img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
      title: 'Storage',
      price: '$25',
    },
    {
      img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
      title: 'Candle',
      price: '$45',
    },
    {
      img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
      title: 'Coffee table',
      price: '$55',
    },
  ];

const Products = () => {

  const [products, setProducts] = React.useState([]);
  React.useEffect(()=>{
    axios.get("http://localhost:8080/products")
    .then(response => setProducts(response.data))
    .catch(error => console.log(error));
  }, []);
    return(
        <Container maxWidth='sm'>
            <ArrowBackIosNewIcon />
            <Box sx={{ width: '100%', textAlign: 'center'}}>
                <Typography variant="h2" gutterBottom>
                    Products
                </Typography>
            </Box>
            <Box sx={{ width: 'auto', height: 'auto', overflowY: 'scroll' }}>
                <ImageList variant="masonry" cols={3} gap={8}>
                    {products.map((product) => (
                    <ImageListItem key={product.imageUrl}>
                        <img
                        srcSet={`${product.imageUrl}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        src={`${product.imageUrl}?w=248&fit=crop&auto=format`}
                        alt={product.name}
                        loading="lazy"
                        />
                        <ImageListItemBar position="below" title={product.price} />
                    </ImageListItem>
                    ))}
                </ImageList>
            </Box>
        </Container>
    );
}

export default Products;