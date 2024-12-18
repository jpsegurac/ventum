import React from 'react';
import ImageCarousel from '@/components/ImageCarousel';
/* -- Styles --*/
import styles from "@/styles/ApartamentsHeader.module.scss";
/* -- Assets --*/
import ActionArrow from '@/assets/icons/action_arrow.svg';
import PhoneBackground from '@/assets/icons/phone_background.svg';
import ImageCarouselAptos from '../ImageCarouselAptos';


const ApartamentsCarousel = ( {scrollDown} ) => {
    return (
        <section className={styles.container}>
            <div className={styles.Slider}>
                <ImageCarouselAptos />            
            </div>            
            {/* <div className={styles.carouselContent}>
                <div className={styles.carouselText}>
                    <h1 className={styles.carouselText_title} >Apartamentos</h1>
                </div>
                <div className={styles.arrow_bottom_container}>
                    <a className={styles.headerCta}>Conoce mas</a>
                    <ActionArrow className={styles.arrow_bottom} onClick={scrollDown}/>
                </div>
            </div> */}
                <div className={styles.phone_container}>
                    <PhoneBackground className={styles.phone_background}/>
                </div>
            <div className={styles.floatBox}>
                <h2> CONOCE A NUESTRO APARTAMENTO MODELO</h2>
            </div>
        </section>
    );
};
export default ApartamentsCarousel;