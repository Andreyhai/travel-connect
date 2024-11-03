import React from 'react';

import styles from "./Header.module.css";
import { Link } from 'react-router-dom';
import { ERROR_ROUTE } from '../../utils/CONSTS';

const Header = () => {
    return (
        <header className={styles.header}>

            <h1>header</h1>
            <Link to={ERROR_ROUTE}>
                to error
            </Link>
        </header>
    );
};

export default Header;