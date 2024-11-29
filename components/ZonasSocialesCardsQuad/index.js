import React from "react";
import styles from "@/styles/ZonasSocialesCardsQuad.module.scss";
import TiktokLogo from '@/assets/icons/tiktok.svg';

import Image from 'next/image';

import home_background from '@/assets/images/home_page_background_4.jpg';

const ZonasSocialesCardsQuad = () => {
    return(
        <section className={styles.CardsQuad}>
            <div className={styles.Container}>
                <div className={styles.GridContainer}>
                    <div className={styles.CardText}>
                        <div className={styles.copy}>
                            <h2>¡Es momento de crear recuerdos inolvidables!</h2>
                        </div>
                        <div className={styles.logo}>                        
                            <TiktokLogo width="80px" height="80px"/>
                        </div>
                    </div>
                    <div className={styles.CardImage}>
                        <Image
                            src={home_background}
                            alt="home_background"
                        />
                    </div>
                    <div className={styles.CardCta}>
                        <a href="/" target="_blank" className={styles.ContactButton}>
                                                
                        <TiktokLogo className={styles.Phone} />
                        ¡Contactanos!
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ZonasSocialesCardsQuad;