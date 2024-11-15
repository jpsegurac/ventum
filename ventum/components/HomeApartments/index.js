import React from 'react';
/* -- Styles --*/
import styles from "@/styles/HomeApartments.module.scss";
/* -- Assets --*/
import ActionArrow from '@/assets/icons/action_arrow.svg';
import HomeApartmentButton from '@/assets/icons/home_apartment_button.svg';
import home_background from '@/assets/images/home_page_background_4.jpg';
import Image from 'next/image';



const HomeApartments = () => {
    return (
        <section className={styles.homeApartment}>
            <div className={styles.homeApartment_info}>
                <h1 className={styles.homeApartment_info_text} >Apartamentos desde <strong>54,36 m²</strong></h1>
                <h1 className={styles.homeApartment_info_text}>hasta <strong>121,48 m²</strong></h1>
            </div>
            <div className={styles.arrow_left_container}><ActionArrow className={styles.arrow_left}/></div>
            <div className={styles.arrow_right_container}><ActionArrow className={styles.arrow_right}/></div>
            <div className={styles.knowApartments}>
                <HomeApartmentButton className={styles.knowApartments_logo}/>
                <h3 className={styles.knowApartments_text}>Conoce nuestros apartamentos</h3>
            </div>
            <div className={styles.pagination}>
                <h3 className={styles.pagination_text}>°°°</h3>
            </div>

            <section className={styles.backgroundImage}>
                <Image
                    src={home_background}
                    alt="home_background"
                    fill={true}
                />
            </section>
            
            
        </section>
    );
};
export default HomeApartments;