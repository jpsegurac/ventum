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
        <section className={styles.homeCarousel}>
            <div className={styles.carouselContent}>
                <div className={styles.arrow_left_container}><ActionArrow className={styles.arrow_left}/></div>
                <div className={styles.carouselText}>
                    <h1 className={styles.carouselText_title} >TU NUEVO HOGAR,</h1>
                    <h3 className={styles.carouselText_subTitle}>un refugio de desconexón</h3>
                </div>
                <div className={styles.arrow_right_container}><ActionArrow className={styles.arrow_right}/></div>
                <div className={styles.arrow_bottom_container}>
                    <div className={styles.knowMore}>
                        <KnowMoreButton className={styles.knowMore_logo}/>
                        <h3 className={styles.knowMore_text}>Conoce más</h3>
                    </div>
                    <ActionArrow className={styles.arrow_bottom}/>
                </div>
                <div className={styles.phone_container}>
                    <PhoneBackground className={styles.phone_background}/>
                </div>
            </div>

            <section className={styles.backgroundImage}>
                <ImageCarousel />
            </section>
            
            
        </section>
    );
};
export default HomeCarousel;