import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LanguageIcon from '@mui/icons-material/Language';
import { Box, Link, List, ListItem, Typography, Toolbar } from '@mui/material';

export const Footer = () => {
    return (
        <Toolbar>
            <Box component={'div'} sx={{ display: 'flex', justifyContent: 'space-evenly', width: '100%' }}>
                <Box sx={{ py: 1 }}>
                    <Typography variant="h6" sx={{ fontFamily: "inherit" }}>
                        © {new Date().getFullYear()} Pollaroid | Shopping Cart
                    </Typography>
                </Box>
                <List sx={{ display: 'flex' }}>
                    <ListItem>
                        <Link href='https://github.com/greazleay' target='_blank' color='inherit'>
                            <GitHubIcon />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href='https://www.linkedin.com/in/siezes' target='_blank' color='inherit'>
                            <LinkedInIcon />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href='https://pollaroid.net' target='_blank' color='inherit'>
                            <LanguageIcon />
                        </Link>
                    </ListItem>
                </List>
            </Box>

        </Toolbar>

    );
}