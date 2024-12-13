'use client'

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './ApartmentsCarousel.scss';

// import required modules
import { FreeMode, Navigation, Pagination, Thumbs } from 'swiper/modules';

export default function ApartmentsCarousel() {
const [thumbsSwiper, setThumbsSwiper] = useState(null);

return (
    <section className='ApartmentsCarousel'>
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
            className="mySwiper3"
        >
            <SwiperSlide>
            <img src="images/Zonas_Sociales_Ventum-01.png" alt="nature-1"/>
            {/* <div className='copy even'>
                <h2>GIMNASIO</h2>
                <p>Culpa ipsum consequat do et ea tempor non labore consequat anim exercitation id sunt ad.</p>
            </div> */}
            </SwiperSlide>
            <SwiperSlide>
            <img src="images/Zonas_Sociales_Ventum-02.png" alt="nature-2"/>
            {/* <div className='copy odd'>
                <h2>BBQ</h2>
                <p>Culpa ipsum consequat do et ea tempor non labore consequat anim exercitation id sunt ad.</p>
            </div> */}
            </SwiperSlide>
            <SwiperSlide>
            <img src="images/Zonas_Sociales_Ventum-03.png" alt="nature-3"/>
            {/* <div className='copy even'>
                <h2>PISCINA Y JACUZZI</h2>
                <p>Culpa ipsum consequat do et ea tempor non labore consequat anim exercitation id sunt ad.</p>
            </div> */}
            </SwiperSlide>
            <SwiperSlide>
            <img src="images/Zonas_Sociales_Ventum-04.png" alt="nature-4"/>
            {/* <div className='copy odd'>
                <h2>SALON DE JUEGOS</h2>
                <p>Culpa ipsum consequat do et ea tempor non labore consequat anim exercitation id sunt ad.</p>
            </div> */}
            </SwiperSlide>
            <SwiperSlide>
            <img src="images/Zonas_Sociales_Ventum-05.png" alt="nature-5"/>
            {/* <div className='copy even'>
                <h2>PLAYGROUND</h2>
                <p>Culpa ipsum consequat do et ea tempor non labore consequat anim exercitation id sunt ad.</p>
            </div> */}
            </SwiperSlide>
            
        </Swiper>
        <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={30}
            slidesPerView={3}
            breakpoints={{ 768: { slidesPerView: 5 } }}
            navigation={true}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs ]}
            className="mySwiper4"
        >
            <SwiperSlide>
            <img src="images/Zonas_Sociales_Ventum-01.png" alt="nature-1"/>
            </SwiperSlide>
            <SwiperSlide>
            <img src="images/Zonas_Sociales_Ventum-02.png" alt="nature-2"/>
            </SwiperSlide>
            <SwiperSlide>
            <img src="images/Zonas_Sociales_Ventum-03.png" alt="nature-3"/>
            </SwiperSlide>
            <SwiperSlide>
            <img src="images/Zonas_Sociales_Ventum-04.png" alt="nature-4"/>
            </SwiperSlide>
            <SwiperSlide>
            <img src="images/Zonas_Sociales_Ventum-05.png" alt="nature-5"/>
            </SwiperSlide>
        </Swiper>
    </section>
);
}
