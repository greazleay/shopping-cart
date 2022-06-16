import { useState, MouseEvent } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export const NavBar = () => {

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const openMenu = Boolean(anchorEl);

    const handleMouseOver = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    return (
        <AppBar elevation={1} position='static' color='transparent'>
            <Toolbar>

                <Box component={'div'} sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>

                    <Box>
                        <IconButton size='medium' edge='start' color='inherit' aria-label='logo' sx={{ mr: 2 }}>
                            <img src='h2.png' alt='logo' />
                        </IconButton>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography variant='h6' sx={{ mr: '20px', cursor: 'pointer', fontFamily: 'inherit' }}>Home</Typography>
                        <Typography variant='h6' sx={{ mr: '20px', cursor: 'pointer', fontFamily: 'inherit' }}>Shop</Typography>
                        <Typography
                            variant='h6' sx={{ mr: '20px', cursor: 'pointer', fontFamily: 'inherit' }}
                            aria-controls={openMenu ? 'basic-menu' : undefined}
                            aria-haspopup='true'
                            aria-expanded={openMenu ? 'true' : undefined}
                            onMouseOver={handleMouseOver}
                        >
                            Categories
                        </Typography>
                        <Menu id='basic-menu' anchorEl={anchorEl} open={openMenu} onClose={handleClose}>
                            <MenuItem onClick={() => { }}>Men's clothing</MenuItem>
                            <MenuItem onClick={() => { }}>Women's clothing</MenuItem>
                            <MenuItem onClick={() => { }}>Jewelery</MenuItem>
                            <MenuItem onClick={() => { }}>Electronics</MenuItem>
                        </Menu>
                        <Typography variant='h6' sx={{ mr: '20px', cursor: 'pointer', fontFamily: 'inherit' }}>Checkout</Typography>
                    </Box>

                    <Box sx={{ paddingTop: 1 }}>
                        <IconButton size='large' edge='start' color='inherit' aria-label='shopping-cart' sx={{ mr: 2 }}>
                            <Badge badgeContent={1} color='secondary' sx={{ mr: 2 }}>
                                <AddShoppingCartSharpIcon fontSize='large' />
                            </Badge>
                        </IconButton>
                    </Box>

                </Box>

            </Toolbar>
        </AppBar>
    );
}

