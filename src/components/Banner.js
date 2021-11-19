import React from 'react';

import styles from './Banner.module.css';
import banner from '../images/banner.jpg'
const Banner = () => {
    return (
        <div className={styles.container}>
            <img src={banner} alt="Banner" />
            <div className={styles.textContainer}>
                <h1>Papiloo Company</h1>
                <p>we're learning <span>React.js</span></p>
            </div>
        </div>
    );
};

export default Banner;