import { useRouter } from 'next/router';
import { useProductContext } from '@contexts/app.context';
import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';
import AppBar from '@mui/material/AppBar';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Image from 'next/image';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import navLogo from '@public/img_nav.png';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export const NavBar = () => {

    const { handleFilter, handleClose, handleMouseOver, anchorEl, openMenu, cartItems } = useProductContext();
    const { asPath, push } = useRouter();
    const cartItemsCount: number = cartItems.reduce((a, b) => a + b.count, 0)

    return (
        <AppBar elevation={1} position='static' color='transparent'>
            <Toolbar>

                <Box component={'div'} sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', flexWrap: 'wrap' }}>

                    <Box>
                        <IconButton size='medium' edge='start' color='inherit' aria-label='logo'>
                            <Image src={navLogo} alt='logo' />
                        </IconButton>
                    </Box>

                    <List component={'nav'} sx={{ display: 'flex', alignItems: 'center' }}>
                        <ListItem>
                            <Link color='inherit' underline='none' component={'span'} onClick={() => push('/')} sx={{ cursor: 'pointer' }} >
                                Home
                            </Link>
                        </ListItem>

                        <ListItem>
                            <Link color='inherit' underline='none' component={'span'} onClick={() => push('/shop')} sx={{ cursor: 'pointer' }}>
                                Shop
                            </Link>
                        </ListItem>

                        {asPath === '/shop' &&
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
                                    {['All Items', 'Men\'s clothing', 'Women\'s clothing', 'Jewelery', 'Electronics'].map((item, index) => {
                                        return <MenuItem
                                            key={index}
                                            onClick={(e) => handleFilter(e)}
                                            sx={{ fontFamily: 'inherit', fontWeight: '600' }}
                                        >
                                            {item}
                                        </MenuItem>
                                    })}
                                </Menu>
                            </ListItem>
                        }

                        <ListItem>
                            <Link color='inherit' underline='none' component={'span'} onClick={() => push('/checkout')} sx={{ cursor: 'pointer' }}>
                                Checkout
                            </Link>
                        </ListItem>
                    </List>

                    <Box sx={{ pt: '10px' }}>
                        <IconButton size='large' edge='start' color='inherit' aria-label='shopping-cart' sx={{ pr: '20px' }}>
                            <Badge badgeContent={cartItemsCount} color='secondary'>
                                <AddShoppingCartSharpIcon fontSize='large' />
                            </Badge>
                        </IconButton>
                    </Box>

                </Box>

            </Toolbar>
        </AppBar>
    );
}

