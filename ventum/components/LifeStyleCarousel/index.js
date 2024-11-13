"use client";
import React from 'react';
import { Carousel } from 'react-responsive-carousel';

/* -- Styles --*/
import styles from "@/styles/LifeStyleCarousel.module.scss";
/* -- Assets --*/

const images = [
    // {
    //     src: "images/lifestyle_1.jpg",
    //     alt: "lifestyle_1",
    // },
    {
        src: "images/lifestyle_2.jpg",
        alt: "lifestyle_2",
    },
    // {
    //     src: "images/lifestyle_3.jpg",
    //     alt: "lifestyle_3",
    // },
    // {
    //     src: "images/lifestyle_4.jpg",
    //     alt: "lifestyle_4",
    // },
    // {
    //     src: "images/lifestyle_5.jpeg",
    //     alt: "lifestyle_5",
    // }
]

const LifeStyleCarousel = () => {
        return (
            <div className={styles.lifestyle_car_container}>
                <Carousel
                    showArrows={true}
                    showThumbs={true}
                    infiniteLoop={true}
                    showIndicators={false}
                >
                    {
                        images.map((image, index) => (
                                <img
                                    className={styles.lifestyle_image}
                                    src={image.src}
                                    alt={image.alt}
                                />
                        ))
                    }
                </Carousel>
            </div>
        );
};

export default LifeStyleCarousel;
