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

                <Box component={'div'} sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', flexWrap: 'wrap' }}>

                    <Box>
                        <IconButton size='medium' edge='start' color='inherit' aria-label='logo'>
                            <img src='img_nav.png' alt='logo' />
                        </IconButton>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography variant='subtitle1' component="div" sx={{ pr: '20px', cursor: 'pointer', fontFamily: 'inherit', fontWeight: '600' }}>Home</Typography>
                        <Typography variant='subtitle1' component="div" sx={{ pr: '20px', cursor: 'pointer', fontFamily: 'inherit', fontWeight: '600' }}>Shop</Typography>
                        <Typography
                            variant='subtitle1' sx={{ pr: '20px', cursor: 'pointer', fontFamily: 'inherit', fontWeight: '600' }}
                            component="div"
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
                        <Typography variant='subtitle1' component="div" sx={{ pr: '20px', cursor: 'pointer', fontFamily: 'inherit', fontWeight: '600' }}>Checkout</Typography>
                    </Box>

                    <Box sx={{ pt: '10px' }}>
                        <IconButton size='large' edge='start' color='inherit' aria-label='shopping-cart' sx={{ pr: '20px' }}>
                            <Badge badgeContent={1} color='secondary'>
                                <AddShoppingCartSharpIcon fontSize='large' />
                            </Badge>
                        </IconButton>
                    </Box>

                </Box>

            </Toolbar>
        </AppBar>
    );
}

