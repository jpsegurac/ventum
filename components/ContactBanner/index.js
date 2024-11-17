import React from "react";
import styles from "@/styles/ContactBanner.module.scss";

const ContactBanner = () => {
    return(
        <div className={styles.bannerContainer}>
            <div>
                <div className={styles.bannerTitle}>
                    CONTACTO
                </div>
                <div className={styles.bannerText}>
                    si requieres mas información sobre el proyecto, ¡Contactanos!
                </div>
            </div>
        </div>
    )
}
export default ContactBanner;