"use client";
import React, { useRef } from 'react';

import MainWrapper from "@/components/MainWrapper";
import HomeCarousel from "@/components/HomeCarousel";
import LifeStyle from "@/components/LifeStyle";
import HomeApartments from "@/components/HomeApartments";
import HomeExtraInfo from "@/components/HomeExtraInfo";
import HomeAirView from "@/components/HomeAirView";


const Home = () => {

  const sectionRef = useRef(null);

  const scrollToSection = () => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
      <MainWrapper>
        <HomeCarousel scrollDown={scrollToSection}/>
        <LifeStyle scrollRef={sectionRef}/>
        <HomeApartments />
        <HomeExtraInfo />
        <HomeAirView />
      </MainWrapper>
  );
}
export default Home;