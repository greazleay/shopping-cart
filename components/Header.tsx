import { Link } from "@mui/material";

export const Header = () => {
    return (
        <header className="header">
            <div className="header__logo">
                <Link href="/">
                    <a> <img src="/logo.png" alt="Logo" /></a>
                </Link>
            </div>
            <div className="header__nav">
                <ul className="header__nav-list">
                    <li className="header__nav-item">
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li className="header__nav-item">
                        <Link href="/about">
                            <a>About</a>
                        </Link>
                    </li>
                    <li className="header__nav-item">
                        <Link href="/contact">
                            <a>Contact</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}