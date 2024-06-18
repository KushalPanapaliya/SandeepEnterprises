import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

const CartCard = ()=>{
    return(
        <Card sx={{ display: 'flex' }}>
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image="/static/images/cards/live-from-space.jpg"
          alt="Live from space album cover"
        />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h5">
              Product Name
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              Description
            </Typography>
          </CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
            <IconButton aria-label="remove">
              <Button >Remove</Button>
            </IconButton>
            <IconButton aria-label="Count">
              <Button sx={{ height: 38, width: 38 }}>-</Button>Count<Button sx={{ height: 38, width: 38 }}>+</Button>
            </IconButton>
          </Box>
        </Box>
      </Card>
    );
}

export default CartCard;