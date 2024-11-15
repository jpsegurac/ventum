import React from 'react';
import MainWrapper from '@/components/MainWrapper';

/* -- Styles --*/
import styles from "@/styles/page.module.scss";
import ApartmentsPageWrapper from '@/components/ApartmentsPageWrapper';


const apartamentos = () => {
  return (
    <MainWrapper>
      <div className={styles.page}>
      <ApartmentsPageWrapper />  
      </div>
    </MainWrapper>
  )
}

export default apartamentos;