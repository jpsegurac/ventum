import Link from "next/link";
import Image from "next/image";
import styles from '../../app/styles/NavBar.module.css';
/* -- Assets --*/
import Logo from '@/assets/logos/header_logo.svg'; 

export const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navHeader}>
        <li className={styles.navLogo}>
          <Link href='/'>
            <Image src={Logo} alt="Logo"/>
          </Link>
        </li>
        <li className={styles.links}>
          <ul className={styles.navLinks}>
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
