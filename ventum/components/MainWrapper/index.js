"use client";
import React from 'react';
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

import styles from '@/styles/MainWrapper.module.scss';

import { usePathname } from 'next/navigation'
import ImageCarousel from '@/components/ImageCarousel';


const headerTitles = {
    home: "Home Ventum",
    apartamentos: "Apartamentos",
    zonassociales: "Zonas sociales Opción 2",
    nosotros: "Nosotros",
    contacto: "Contacto"
};

const MainWrapper = ({children}) => {
    const pathname = usePathname().replace("/", "");

    return (
        <div className={styles.main}>
            <Header title={pathname.length == 0 ? headerTitles.home : headerTitles[pathname]}/>
            <NavBar />
            {children}
            <Footer />
        </div>
    );
};
export default MainWrapper;