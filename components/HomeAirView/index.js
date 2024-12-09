import React from 'react';
import Image from 'next/image';
/* -- Styles --*/
import styles from "@/styles/HomeAirView.module.scss";
/* -- Assets --*/
import air_view from '@/assets/images/lifestyle_5.jpeg';
import HomeAirViewBtn from '@/assets/icons/know_more_button.svg';


const HomeAirView = () => {
    return (
        <div className={styles.homeAirView}>
            <Image
                className={styles.homeAirView_image}
                src={air_view}
                alt="air_view"
            />
            <div className={styles.homeAirView_btn}>
                <a className={styles.homeAirViewCta}>Vista aérea</a>
            </div>
        </div>
    );
};
export default HomeAirView;