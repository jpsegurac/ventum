import React from 'react';
import MainWrapper from '@/components/MainWrapper';

/* -- Styles --*/
import styles from "@/styles/page.module.scss";
import ApartmentsPageWrapper from '@/components/ApartmentsPageWrapper';
import ApartmentsHeader from '@/components/ApartmentsHeader';
import ApartmentsBanner from '@/components/ApartmentsBanner';


const apartamentos = () => {
  return (
    <MainWrapper>
      <ApartmentsHeader />
      <ApartmentsBanner />
      <ApartmentsPageWrapper />  
    </MainWrapper>
  )
}

export default apartamentos;