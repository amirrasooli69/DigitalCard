import React from 'react';

import styles from "./Logos.module.css";

import apple from '../images/apple.jpg';
import samsung from '../images/samsung.jpg';
import xiaomi from '../images/xiaomi.jpg';

const Logos = () => {
    return (
        <div className={styles.container}>
            <h3>Who suppurt us?</h3>
            <img src={apple} alt='Logo' />
            <img src={samsung} alt='Logo' />
            <img src={xiaomi} alt='Logo' />

        </div>
    );
};
export default Logos;