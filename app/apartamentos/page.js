"use client";
import React, { useRef } from 'react';
import MainWrapper from '@/components/MainWrapper';
import ApartmentsPageWrapper from '@/components/ApartmentsPageWrapper';
import ApartmentsHeader from '@/components/ApartmentsHeader';
import ApartmentsBanner from '@/components/ApartmentsBanner';


const Apartamentos = () => {

  const sectionRef = useRef(null);

  const scrollToSection = () => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <MainWrapper>
      <ApartmentsHeader scrollDown={scrollToSection}/>
      <ApartmentsBanner scrollRef={sectionRef}/>
      <ApartmentsPageWrapper />  
    </MainWrapper>
  )
}

export default Apartamentos;