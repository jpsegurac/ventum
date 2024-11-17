import React from 'react';
import ImageCarousel from '@/components/ImageCarousel';
/* -- Styles --*/
import styles from "@/styles/HomeCarousel.module.scss";
/* -- Assets --*/
import ActionArrow from '@/assets/icons/action_arrow.svg';
import PhoneBackground from '@/assets/icons/phone_background.svg';
import KnowMoreButton from '@/assets/icons/know_more_button.svg';



const HomeCarousel = () => {
    return (
        <section className={styles.container}>
            <div className={styles.Slider}>
                <ImageCarousel />            
            </div>            
            <div className={styles.carouselContent}>
                <div className={styles.carouselText}>
                    <h1 className={styles.carouselText_title} >TU NUEVO HOGAR,</h1>
                    <p className={styles.carouselText_subTitle}>un refugio de desconexón</p>
                </div>
                <div className={styles.arrow_bottom_container}>
                    
                    <a className={styles.headerCta}>Conoce mas</a>
                    <ActionArrow className={styles.arrow_bottom}/>
                </div>
            </div>
                <div className={styles.phone_container}>
                    <PhoneBackground className={styles.phone_background}/>
                </div>
        </section>
    );
};
export default HomeCarousel;