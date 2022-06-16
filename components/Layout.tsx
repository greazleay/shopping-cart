import { ReactNode } from 'react';
import styles from '@styles/layout.module.css';
import { NavBar } from '@components/NavBar';
import { Footer } from '@components/Footer';
import { Box } from '@mui/material';


export const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <Box>
            <NavBar />
            <main className={styles.main}>
                {children}
            </main>
            <Footer />
        </Box>
    );
}