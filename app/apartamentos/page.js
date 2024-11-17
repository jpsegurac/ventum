"use client";
import React, { useRef } from 'react';
import MainWrapper from '@/components/MainWrapper';

/* -- Styles --*/
import styles from "@/styles/page.module.scss";
import ApartmentsPageWrapper from '@/components/ApartmentsPageWrapper';
import ApartmentsHeader from '@/components/ApartmentsHeader';
import ApartmentsBanner from '@/components/ApartmentsBanner';


const apartamentos = () => {

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

export default apartamentos;