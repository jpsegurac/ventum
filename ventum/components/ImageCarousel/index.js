"use client";
import React from 'react';
import { Carousel } from 'react-responsive-carousel';

/* -- Styles --*/
import 'react-multi-carousel/lib/styles.css';
import styles from "@/styles/ImageCarousel.module.scss";
/* -- Assets --*/
import home_background_1 from '@/assets/images/home_page_background_1.jpg';
import home_background_2 from '@/assets/images/home_page_background_2.jpg';
import home_background_3 from '@/assets/images/home_page_background_3.jpg';
import home_background_4 from '@/assets/images/home_page_background_4.jpg';
import home_background_5 from '@/assets/images/home_page_background_5.jpeg';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

const images = [
    {
        src: "images/home_page_background_1.jpg",
        alt: "home_background_1",
    },
    // {
    //     src: "images/home_page_background_2.jpg",
    //     alt: "home_background_2",
    // },
    // {
    //     src: "images/home_page_background_3.jpg",
    //     alt: "home_background_3",
    // },
    // {
    //     src: "images/home_page_background_4.jpg",
    //     alt: "home_background_4",
    // },
    // {
    //     src: "images/home_page_background_5.jpeg",
    //     alt: "home_background_5",
    // }
]

const ImageCarousel = () => {
        return (
            <Carousel
                showArrows={true}
                showThumbs={true}
                autoPlay={true}
                infiniteLoop={true}
                showIndicators={false}
                transitionTime={1000}
            >
                {
                    images.map((image, index) => (
                        <div className={styles.backgroundContainer} key={index}>
                            <img
                                className={styles.backgroundImage}
                                src={image.src}
                                alt={image.alt}
                            />
                        </div>
                    ))
                }
            </Carousel>
        );
};

export default ImageCarousel;
