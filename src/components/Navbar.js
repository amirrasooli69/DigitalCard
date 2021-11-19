import React from 'react';
import styles from './Navbar.module.css';

import logo from '../images/logo.jpg';

const Navbar = () => {
    return (
        <div>
            <header className={styles.header}>
                <div className={styles.listContainer}>
                    <ul className={styles.list}>
                        <li>Home page</li>
                        <li>Products</li>
                        <li>About Us</li>
                    </ul>
                </div>
                <div className={styles.logo}>
                    <img className={styles.logo} src={logo} alt="Logo"/>
                </div>
            </header>
        </div>
    );
};

export default Navbar;