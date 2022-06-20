import { useState, MouseEvent } from 'react';
import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';
import AppBar from '@mui/material/AppBar';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

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

                    <List component={'nav'} sx={{ display: 'flex', alignItems: 'center' }}>
                        <ListItem>
                            <Link href='/' color='inherit' underline='none'>
                                Home
                            </Link>
                        </ListItem>

                        <ListItem>
                            <Link href='/shop' color='inherit' underline='none'>
                                Shop
                            </Link>
                        </ListItem>

                        <ListItem>
                            <Typography
                                variant='subtitle1' sx={{ cursor: 'pointer', fontFamily: 'inherit', fontWeight: '600' }}
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
                        </ListItem>

                        <ListItem>
                            <Link href='/checkout' color='inherit' underline='none'>
                                Checkout
                            </Link>
                        </ListItem>
                    </List>

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

