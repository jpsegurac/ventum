import React from 'react';
import Image from 'next/image';
/* -- Styles --*/
import styles from "./ZonasSocialesHeader.module.scss";
/* -- Assets --*/
import ActionArrow from '@/assets/icons/action_arrow.svg';
import PhoneBackground from '@/assets/icons/phone_background.svg';
import home_background_1 from '@/assets/images/home_page_background_1.jpg';



const ZonasSocialesHeader = ( {scrollDown} ) => {
    return (
        <section className={styles.homeCarousel}>
            <div className={styles.carouselContent}>
                <div className={styles.carouselText}>
                    <h1 className={styles.carouselText_title} >ZONAS SOCIALES</h1>
                    <h3 className={styles.carouselText_subTitle}>para disfrutar todoso los dias</h3>
                </div>
                <div className={styles.arrow_bottom_container} onClick={scrollDown}>
                    <ActionArrow className={styles.arrow_bottom}/>
                </div>
                <div className={styles.phone_container}>
                    <PhoneBackground className={styles.phone_background}/>
                </div>
            </div>

            <section className={styles.backgroundImage}>
                <Image
                    src={home_background_1}
                    alt="home_background_1"
                    fill={true}
                />
            </section>
            
            
        </section>
    );
};
export default ZonasSocialesHeader;