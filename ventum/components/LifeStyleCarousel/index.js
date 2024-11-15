"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

/* -- Styles --*/
import styles from "@/styles/LifeStyleCarousel.module.scss";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
/* -- Modules --*/
import { Navigation, Pagination } from 'swiper/modules';
/* -- Assets --*/

const LifeStyleCarousel = () => {

        return (
            <div className={styles.lifestyle_car_container}>
                <Swiper
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    cssMode={true}
                    navigation={true}
                    pagination={true}
                    modules={[Navigation, Pagination]}
                    className={styles.swiper}
                >
                    <SwiperSlide>
                        <img
                            className={styles.lifestyle_carousel_image}
                            src="images/lifestyle_1.jpg"
                            alt="lifestyle_1"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className={styles.lifestyle_carousel_image}
                            src="images/lifestyle_2.jpg"
                            alt="lifestyle_2"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className={styles.lifestyle_carousel_image}
                            src="images/lifestyle_3.jpg"
                            alt="lifestyle_3"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className={styles.lifestyle_carousel_image}
                            src="images/lifestyle_4.jpg"
                            alt="lifestyle_4"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img
                            className={styles.lifestyle_carousel_image}
                            src="images/lifestyle_5.jpeg"
                            alt="lifestyle_5"
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
            
        );
};

export default LifeStyleCarousel;



