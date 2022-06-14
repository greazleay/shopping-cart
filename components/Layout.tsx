import { ReactNode } from 'react';
import styles from '../styles/layout.module.css';
import { Header } from './Header';
import { Footer } from './Footer';


export const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.main}>
                {children}
            </main>
            <Footer />
        </div>
    );
}