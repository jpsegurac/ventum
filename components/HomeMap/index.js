import React from 'react';
import Image from 'next/image';
/* -- Styles --*/
import styles from "@/styles/HomeMap.module.scss";
/* -- Assets --*/
import home_map from '@/assets/images/home_map.png';



const HomeMap = () => {
    return (
        <div className={styles.homeMap}>
            <div className={styles.homeMap_container}>
                <Image
                    className={styles.homeMap_map}
                    src={home_map}
                    alt="home_map"
                />
            </div>
        </div>
    );
};
export default HomeMap;