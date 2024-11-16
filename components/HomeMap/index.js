import React from 'react';
import Image from 'next/image';
/* -- Styles --*/
import styles from "@/styles/HomeMap.module.scss";
/* -- Assets --*/
import home_map from '@/assets/images/home_map.png';



const HomeMap = () => {
    return (
        <div className={styles.homeMap}>
            <Image
                className={styles.homeMap_map}
                src={home_map}
                alt="home_map"
                fill={true}
            />
        </div>
    );
};
export default HomeMap;