"use client";
import React, {useRef} from 'react';
import ZonasSocialesHeader from '@/components/ZonasSocialesHeader';
import ZonasSocialesQuad from '@/components/ZonasSocialesQuad';
import ZonasSocialesCarousel from '@/components/ZonasSocialesCarousel';
import ZonasSocialesCardsQuad from '@/components/ZonasSocialesCardsQuad';

const Zonassociales = () => {

  const sectionRef = useRef(null);

  const scrollToSection = () => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <>
      <ZonasSocialesHeader scrollDown={scrollToSection}/>
      <ZonasSocialesQuad 
        imageSrc="images/lifestyle_4.jpg" /* Replace with your image URL */
        title="Lobby"
        subtitle="Doble altura"
        text=""
        scrollRef={sectionRef}
      />
      <ZonasSocialesCarousel />
      <ZonasSocialesCardsQuad />
    </>
  )
}

export default Zonassociales;