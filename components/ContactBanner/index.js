import React from "react";
import styles from "@/styles/ContactBanner.module.scss";
import ActionArrow from '@/assets/icons/action_arrow.svg';

const ContactBanner = () => {
    return(
        <div className={styles.bannerContainer}>
            <div>
                <div className={styles.bannerTitle}>
                    Contacto
                </div>
                <div className={styles.bannerText}>
                    si requeire mas infromacion sobre el proyecto, !
                </div>
            </div>
        </div>
    )
}
export default ContactBanner;