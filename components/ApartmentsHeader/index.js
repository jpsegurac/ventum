import React from 'react';
import Image from 'next/image';
/* -- Styles --*/
import styles from "./ApartmentsHeader.module.scss";
/* -- Assets --*/
import ActionArrow from '@/assets/icons/action_arrow.svg';
import PhoneBackground from '@/assets/icons/phone_background.svg';
import KnowMoreButton from '@/assets/icons/know_more_button.svg';
import apartments_header_image from '@/assets/images/apartmentsHeader.jpg';


const ApartmentsHeader = ({scrollDown}) => {
    return (
        <section className={styles.homeCarousel}>
            <div className={styles.carouselContent}>
                <div className={styles.arrow_bottom_container}>
                    <ActionArrow className={styles.arrow_bottom} onClick={scrollDown}/>
                </div>
                <div className={styles.phone_container}>
                    <PhoneBackground className={styles.phone_background}/>
                </div>
            </div>

            <section className={styles.backgroundImage}>
                <Image
                    src={apartments_header_image}
                    alt="apartments_background_1"
                    fill={true}
                />
            </section>
            
            
        </section>
    );
};
export default ApartmentsHeader;