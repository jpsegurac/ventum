import React from 'react';

/* -- Styles --*/
import styles from "@/styles/Header.module.scss";

const Header = ({title}) => {
    return (
        <section className={styles.header}>
            <h1 className={styles.header_title}>{title}</h1>
            <p className={styles.header_by}>Diseño: Trinidad Estudio</p>
        </section>
    );
};
export default Header;