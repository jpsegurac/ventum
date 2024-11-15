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
                fill={true}
            />
            <div className={styles.homeAirView_btn}>
                <HomeAirViewBtn className={styles.homeAirView_btn_logo}/>
                <h3 className={styles.homeAirView_btn_text}>Vista aérea</h3>
            </div>
        </div>
    );
};
export default HomeAirView;