import React from 'react';
import Image from 'next/image';
/* -- Styles --*/
import styles from "./ApartmentsHeader.module.scss";
/* -- Assets --*/
import ActionArrow from '@/assets/icons/action_arrow.svg';
import PhoneBackground from '@/assets/icons/phone_background.svg';
import KnowMoreButton from '@/assets/icons/know_more_button.svg';



const ApartmentsHeader = () => {
    return (
        <section className={styles.homeCarousel}>
            <div className={styles.carouselContent}>
                <div className={styles.carouselText}>
                    <h1 className={styles.carouselText_title} >ZONAS SOCIALES</h1>
                    <h3 className={styles.carouselText_subTitle}>para disfrutar todoso los dias</h3>
                </div>
                <div className={styles.arrow_bottom_container}>
                    <ActionArrow className={styles.arrow_bottom}/>
                </div>
                <div className={styles.phone_container}>
                    <PhoneBackground className={styles.phone_background}/>
                </div>
            </div>

            <section className={styles.backgroundImage}>
                <img
                    src="images/apartmentsHeader.jpg"
                    alt="apartments_background_1"
                    fill={true}
                />
            </section>
            
            
        </section>
    );
};
export default ApartmentsHeader;