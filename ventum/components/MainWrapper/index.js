"use client";
import React from 'react';
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

import styles from '@/styles/MainWrapper.module.scss';


const headerTitles = {
    home: "Home Ventum",
    apartamentos: "Apartamentos",
    zonassociales: "Zonas sociales Opción 2",
    nosotros: "Nosotros",
    contacto: "Contacto"
};

const MainWrapper = ({children}) => {

    return (
        <div className={styles.main}>
            <NavBar />
            {children}
            <Footer />
        </div>
    );
};
export default MainWrapper;