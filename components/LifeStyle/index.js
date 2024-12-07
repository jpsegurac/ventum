import React from 'react';
/* -- Styles --*/
import styles from "@/styles/LifeStyle.module.scss";
/* -- Assets --*/
import VentumLifeStyle from '@/assets/logos/logo_ventum_lifestyle.svg';
import LifeStyleCarousel from '@/components/LifeStyleCarousel';


const LifeStyle = ( {scrollRef} ) => {
    return (
        <section className={styles.lifestyle} ref={scrollRef}>
        <div className={styles.copyContainer}>
            <div className={styles.lifestyle_info_header}>
                <VentumLifeStyle className={styles.lifestyle_info_header_title}/>
                <h1 className={styles.lifestyle_info_header_subtitle}>Un estilo de vida</h1>
            </div>
            <div className={styles.lifestyle_info_description}>
                <h3 className={styles.lifestyle_info_description_location}>Barranquilla, Col</h3>
                <p className={styles.lifestyle_info_description_text}>
                    Lorem ipsum dolor sit amet, consectetuer
                    adipiscing elit, sed diam nonummy nibh
                    euismod tincidunt ut laoreet dolore magna
                    aliquam erat volutpat. Ut wisi enim ad
                    minim veniam, quis nostrud exerci tation
                    ullamcorper suscipit lobortis nisl ut aliquip
                    ex ea commodo consequat.
                </p>
            </div>

        </div>
            <div className={styles.lifestyle_carousel}>
                <LifeStyleCarousel />
            </div>
            
            
        </section>
    );
};
export default LifeStyle;