'use client'

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './ZonasSocialesCarousel.scss';

// import required modules
import { FreeMode, Navigation, Pagination, Thumbs } from 'swiper/modules';

export default function ZonasSocialesCarousel() {
const [thumbsSwiper, setThumbsSwiper] = useState(null);

return (
    <section className='ZonasSocialesCarousel'>
        <Swiper
            style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
            }}
            loop={true}
            spaceBetween={10}
            navigation={true}
            pagination={{
            clickable: true,
            }}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs, Pagination]}
            className="mySwiper2"
        >
            <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
            <div className='copy even'>
                <h2>GIMNASIO</h2>
                <p>Culpa ipsum consequat do et ea tempor non labore consequat anim exercitation id sunt ad.</p>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
            <div className='copy odd'>
                <h2>BBQ</h2>
                <p>Culpa ipsum consequat do et ea tempor non labore consequat anim exercitation id sunt ad.</p>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
            <div className='copy even'>
                <h2>PISCINA Y JACUZZI</h2>
                <p>Culpa ipsum consequat do et ea tempor non labore consequat anim exercitation id sunt ad.</p>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
            <div className='copy odd'>
                <h2>SALON DE JUEGOS</h2>
                <p>Culpa ipsum consequat do et ea tempor non labore consequat anim exercitation id sunt ad.</p>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
            <div className='copy even'>
                <h2>PLAYGROUND</h2>
                <p>Culpa ipsum consequat do et ea tempor non labore consequat anim exercitation id sunt ad.</p>
            </div>
            </SwiperSlide>
            
        </Swiper>
        <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={30}
            slidesPerView={5}
            navigation={true}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs ]}
            className="mySwiper"
        >
            <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
            </SwiperSlide>
            <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
            </SwiperSlide>
            <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
            </SwiperSlide>
            <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
            </SwiperSlide>
            <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
            </SwiperSlide>
        </Swiper>
    </section>
);
}
