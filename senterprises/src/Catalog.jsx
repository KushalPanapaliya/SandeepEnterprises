import { Container, Grid, Box, Card, CardMedia, Typography, CardContent, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Catalog(){
    const navigate = useNavigate();
    const productClick = s => navigate("/products/"+s);
    return (
        <>
            <Container maxWidth="sm">
                <Box component="section" sx={{ p: 5 }} alignItems="center">
                    Catalog
                </Box>
                <Grid container spacing={3}>
                    <Grid xs={6} md={3} >
                        <Button onClick={() => productClick("chair")}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="194"
                                image="https://media.istockphoto.com/id/507210611/photo/chair-upholstery.jpg?s=612x612&w=0&k=20&c=VU6yO6YXtziN7n0QKfFwVhveqyy7FsnGg9qG-h5qcGE="
                                alt="Chair"
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                Chair
                                </Typography>
                            </CardContent>
                        </Card>
                        </Button>
                    </Grid>
                    <Grid xs={6} md={3} >
                        <Button onClick={() => productClick("table")}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="194"
                                image="https://www.ikea.com/us/en/images/products/danderyd-dining-table-black__1198593_pe904133_s5.jpg?f=xxs"
                                alt="Table"
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                Table
                                </Typography>
                            </CardContent>
                        </Card>
                        </Button>
                    </Grid>
                    <Grid xs={6} md={3} >
                        <Button onClick={() => productClick("table")}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="194"
                                image="https://i5.walmartimages.com/asr/b2999c9a-6873-4af1-98b3-d4850a93f4fc.bff943c5725df850e0555846d778c092.jpeg?odnHeight=580&odnWidth=580&odnBg=FFFFFF"
                                alt="Laptop Table"
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                Laptop Table
                                </Typography>
                            </CardContent>
                        </Card>
                        </Button>
                    </Grid>
                    <Grid xs={6} md={3} >
                        <Button onClick={() => productClick("table")}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                height="194"
                                image="https://cb.scene7.com/is/image/Crate/cb_dHP_20240402_Modular?bfc=on&wid=1440&qlt=80&op_sharpen=1"
                                alt="Other"
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                Other
                                </Typography>
                            </CardContent>
                        </Card>
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default Catalog;