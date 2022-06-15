import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';
import Badge from '@mui/material/Badge';

export const NavBar = () => {
    return (
        <AppBar elevation={1} position="static" color="transparent">
            <Toolbar>
                <Box component={'div'} sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>

                    <Box>
                        <IconButton size="medium" edge="start" color="inherit" aria-label="logo" sx={{ mr: 2 }}>
                            <img src='h2.png' alt='logo' />
                        </IconButton>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: "center" }}>
                        <Typography variant="h6" sx={{ mr: '20px', cursor: "pointer", fontFamily: "inherit" }}>Home</Typography>
                        <Typography variant="h6" sx={{ mr: '20px', cursor: "pointer", fontFamily: "inherit" }}>Shop</Typography>
                        <Typography variant="h6" sx={{ mr: '20px', cursor: "pointer", fontFamily: "inherit" }}>Categories</Typography>
                        <Typography variant="h6" sx={{ mr: '20px', cursor: "pointer", fontFamily: "inherit" }}>Checkout</Typography>
                    </Box>

                    <Box sx={{ paddingTop: 1 }}>
                        <IconButton size="large" edge="start" color="inherit" aria-label="shopping-cart" sx={{ mr: 2 }}>
                            <Badge badgeContent={4} color='secondary' sx={{ mr: 2 }}>
                                <AddShoppingCartSharpIcon fontSize='large' />
                            </Badge>
                        </IconButton>
                    </Box>

                </Box>

            </Toolbar>
        </AppBar>
    );
}

