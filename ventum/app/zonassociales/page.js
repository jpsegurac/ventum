import React from 'react';
import ZonasSocialesHeader from '@/components/ZonasSocialesHeader';
import MainWrapper from '@/components/MainWrapper';
import ZonasSocialesQuad from '@/components/ZonasSocialesQuad';
import ZonasSocialesCarousel from '@/components/ZonasSocialesCarousel';

/* -- Styles --*/
import styles from "@/styles/page.module.scss";

const zonassociales = () => {
  return (
    <MainWrapper>
      <ZonasSocialesHeader />
      <ZonasSocialesQuad 
        imageSrc="images/home_page_background_2.jpg" /* Replace with your image URL */
        title="Lobby"
        subtitle="Doble altura"
        text="This is some example text content for the section.This is some example text content for the section.This is some example text content for the section.This is some example text content for the section."
      />
      <ZonasSocialesCarousel />
    </MainWrapper>
  )
}

export default zonassociales;