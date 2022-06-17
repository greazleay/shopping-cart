import { ReactNode } from 'react';
import { NavBar } from '@components/NavBar';
import { Footer } from '@components/Footer';
import Box from '@mui/material/Box';


export const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <Box>
            <NavBar />
            {children}
            <Footer />
        </Box>
    );
}