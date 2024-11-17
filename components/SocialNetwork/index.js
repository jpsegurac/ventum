import React from "react";
/* -- Styles --*/
import styles from "@/styles/SocialNetwork.module.scss";
/* -- Assets --*/
import FacebookLogo from '@/assets/icons/facebook.svg';
import InstagramLogo from '@/assets/icons/instagram.svg';
import LinkedinLogo from '@/assets/icons/linkedin.svg';
import TiktokLogo from '@/assets/icons/tiktok.svg';
import WhatsappLogo from '@/assets/icons/whatsapp.svg';

const SocialNetwork = () => {
    return(
        <div className={styles.container}>
            <p className={styles.label}>Encuentranos en:</p>
            <div className={styles.logo_container}>
                <FacebookLogo className={styles.logo}/>
                <InstagramLogo className={styles.logo}/>
                <LinkedinLogo className={styles.logo}/>
                <TiktokLogo className={styles.logo}/>
                <WhatsappLogo className={styles.logo}/>
            </div>
        </div>
    );
}

export default SocialNetwork;