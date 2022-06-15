import { ReactNode } from 'react';
import styles from '@styles/layout.module.css';
import { NavBar } from '@components/NavBar';
import { Footer } from '@components/Footer';


export const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <div className={styles.container}>
            <NavBar />
            <main className={styles.main}>
                {children}
            </main>
            <Footer />
        </div>
    );
}