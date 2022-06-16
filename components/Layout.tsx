import { ReactNode } from 'react';
import { NavBar } from '@components/NavBar';
import { Footer } from '@components/Footer';
import { Box, Container } from '@mui/material';


export const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <Box>
            <NavBar />
            <Box sx={{ display: 'flex', justifyContent: 'center', height: '100vh' }}>
                {children}
            </Box>
            <Footer />
        </Box>
    );
}