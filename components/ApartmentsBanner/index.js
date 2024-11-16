import React from "react";
import styles from "@/styles/ApartmentsBanner.module.scss";
import ActionArrow from '@/assets/icons/action_arrow.svg';

const ApartmentsBanner = () => {
    return(
        <div className={styles.bannerContainer}>
            <div>
                <span className={styles.bannerFont}>
                    TIPOS DE APARTAMENTOSs
                </span>
            </div>
        </div>
    )
}
export default ApartmentsBanner;