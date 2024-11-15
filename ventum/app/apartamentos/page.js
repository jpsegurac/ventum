import React from 'react';
import MainWrapper from '@/components/MainWrapper';

/* -- Styles --*/
import styles from "@/styles/page.module.scss";


const apartamentos = () => {
  return (
    <MainWrapper>
      <div className={styles.page}>
        <h1>Apartamentos</h1>
      </div>
    </MainWrapper>
  )
}

export default apartamentos;