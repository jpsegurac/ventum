"use client";
import React, { useRef } from 'react';
import ApartmentsPageWrapper from '@/components/ApartmentsPageWrapper';
import ApartmentsHeader from '@/components/ApartmentsHeader';
import ApartmentsBanner from '@/components/ApartmentsBanner';


const Apartamentos = () => {

  const sectionRef = useRef(null);

  const scrollToSection = () => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <ApartmentsHeader scrollDown={scrollToSection}/>
      <ApartmentsBanner scrollRef={sectionRef}/>
      <ApartmentsPageWrapper />  
    </>
  )
}

export default Apartamentos;