import styles from '@styles/layout.module.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box, Link, List, ListItem, Paper, Stack } from '@mui/material';

export const Footer = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flex: 1 }}>

            <Box component={'span'}>
                © {new Date().getFullYear()}, Built with Next.js
            </Box>

            <List>
                <ListItem>
                    <Link href='https://github.com/greazleay' target='_blank'>
                        <GitHubIcon />
                    </Link>
                </ListItem>
            </List>

            <ListItem>
                <Link href='https://linkedin.com/in/siezes' target='_blank'>
                    <LinkedInIcon />
                </Link>
            </ListItem>

        </Box>
    );
}