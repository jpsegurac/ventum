"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
/* -- Modules --*/
import { Navigation, Pagination } from 'swiper/modules';
/* -- Styles --*/
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from "@/styles/ImageCarousel.module.scss";

const ImageCarouselAptos = () => {
        return (
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                cssMode={true}
                navigation={true}
                pagination={true}
                loop={true}
                modules={[Navigation, Pagination]}
                className={styles.custom_swiper_carousel}
            >
                <SwiperSlide>
                    <img
                        className={styles.carousel_image}
                        src="images/apartmentsHeader.jpg"
                        alt="home_page_background_1"
                    />
                </SwiperSlide>
                
            </Swiper>
        );
};

export default ImageCarouselAptos;
