import React from "react";
import styles from "@/styles/ContactBanner.module.scss";

const ContactBanner = () => {
    return(
        <div className={styles.bannerContainer}>
            <div>
                <div className={styles.bannerTitle}>
                    <h1>CONTACTO</h1>
                </div>
                <div className={styles.bannerText}>
                    <p>si requieres mas información sobre el proyecto, ¡Contactanos!</p>
                </div>
            </div>
        </div>
    )
}
export default ContactBanner;