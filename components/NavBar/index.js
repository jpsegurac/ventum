"use client";
import React, { useState, useEffect, useLayoutEffect } from 'react';

import Link from "next/link";
import styles from "@/styles/NavBar.module.scss";
/* -- Assets --*/
import Logo from '@/assets/logos/header_logo.svg'; 

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  console.log("rendered!!")

  useLayoutEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 2);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.nav_scrolled : styles.nav_top}`}>
      <ul className={styles.navHeader}>
        <li className={`${styles.navLogo} ${scrolled ? styles.navLogo_scrolled : styles.navLogo_top}`}>
          <Link href='/'>
            <Logo width="auto" height="auto"/>
          </Link>
        </li>
        <li className={`${styles.links} ${scrolled ? styles.links_scrolled : styles.links_top}`}>
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