"use client";
import React, { useState, useLayoutEffect } from 'react';

import Link from "next/link";
import styles from "@/styles/NavBar.module.scss";
/* -- Assets --*/
import Logo from '@/assets/logos/header_logo.svg'; 

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useLayoutEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 2);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.nav_scrolled : styles.nav_top}`}>
      <ul className={styles.navHeader}>
        <li className={styles.navLogo}>
          <Link href='/'>
            <Logo width="auto" height="auto"/>
          </Link>
        </li>
        <li className={styles.links}>
          <ul className={styles.navLinks}>
              <li>
                <Link href='/'>Inicio</Link>
              </li>
              <li>
                <Link href='/apartamentos'>Apartamentos</Link>
              </li>
              <li>
                <Link href='/zonassociales'>Zonas Sociales</Link>
              </li>
              <li>
                <Link href='/nosotros'>Nosotros</Link>
              </li>
              <li>
                <Link href='/contacto'>Contacto</Link>
              </li>
          </ul>
        </li> 
      </ul>
    </nav>
  )
}

export default NavBar;