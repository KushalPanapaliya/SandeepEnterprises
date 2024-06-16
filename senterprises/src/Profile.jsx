import { Avatar, Box, Breadcrumbs, Container, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import ViewListIcon from '@mui/icons-material/ViewList';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EditLocationIcon from '@mui/icons-material/EditLocation';
import ReviewsIcon from '@mui/icons-material/Reviews';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const Profile = () => {
    const navigate = useNavigate();
    const backClick = () => navigate(-1)
    return(
    <>
        <Container maxWidth="sm">
            <ArrowBackIosNewIcon onClick={backClick} />
            <Box component="div" display="block">
                <Avatar alt="User Name" 
                    src="https://imgs.search.brave.com/Hydt50aZyEbsj8RPGXxEjXpVOs8CcwmbNCeop3rCXSQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9kMnY1/ZHpoZGc0emh4My5j/bG91ZGZyb250Lm5l/dC93ZWItYXNzZXRz/L2ltYWdlcy9zdG9y/eXBhZ2VzL25ldy9w/cm9maWxlLXBpY3R1/cmUvcHJvZmlsZS0y/LmpwZw" 
                    sx={{ width: 75, height: 75, mx:'auto' }}
                />
            </Box>
            <Box component="div" display="block" textAlign='center'>
                <Typography variant="h4" gutterBottom >
                    User Name
                </Typography>
            </Box>
            <Box component="div" display="block" textAlign='center'>
                <Typography variant="h6" gutterBottom >
                    userName@gmail.com
                </Typography>
            </Box>
            <Breadcrumbs separator="" aria-label="breadcrumbs">
                <Link href="/"><ViewListIcon />My Orders</Link>
                <Link href="/"><FavoriteBorderIcon />Wishlist</Link>
                <Link href="/"><NotificationsIcon />Notification</Link>
            </Breadcrumbs>
            <List sx={{ width: '100%', bgcolor: 'background.paper'  }}>
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <EditLocationIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Edit Location" />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <ReviewsIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Rate Purchase" />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <ContactPageIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Contact Us" />
                </ListItem>
            </List>
        </Container>
    </>
)};

export default Profile;