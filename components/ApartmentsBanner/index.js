import React from "react";
import styles from "@/styles/ApartmentsBanner.module.scss";
import ActionArrow from '@/assets/icons/action_arrow.svg';

const ApartmentsBanner = ({scrollRef}) => {
    return(
        <div className={styles.bannerContainer} ref={scrollRef}>
            <div>
                <span className={styles.bannerFont}>
                    TIPOS DE APARTAMENTOS
                </span>
            </div>
        </div>
    )
}
export default ApartmentsBanner;