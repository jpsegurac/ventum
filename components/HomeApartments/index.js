import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styles from "@/styles/HomeApartments.module.scss";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

export default function HomeApartments() {
return (
    <section className={styles.container}>
        <Swiper
        navigation={true}
        pagination={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className={styles.mySwiperHomeApartaments}
        >
            <SwiperSlide className={styles.slide}>
                <img src="images/Zonas_Sociales_Ventum-01.jpg" alt="nature-2"/>
                
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
                <img src="images/Zonas_Sociales_Ventum-02.jpg" alt="nature-2"/>
            </SwiperSlide>
        <div className={styles.content}>
            <div className={styles.copy}>
                <p>Apartamentos desde <span>54,36 m<sup>2</sup></span></p>
                <p>hasta <span>121,48 m<sup>2</sup></span></p>
            </div>
            <Link className={styles.headerCta} href='/apartamentos'>Conoce nuestros apartamentos</Link>

        </div>
        </Swiper>

    </section>
  );
}
