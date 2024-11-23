import React from 'react';
import HomeMap from '@/components/HomeMap';
import HomeSocial from '@/components/HomeSocial';
/* -- Styles --*/
import styles from "@/styles/HomeExtraInfo.module.scss";




const HomeExtraInfo = () => {
    return (
        <section className={styles.homeExtraInfo}>
            <HomeSocial />
            <HomeMap />   
        </section>
    );
};
export default HomeExtraInfo;