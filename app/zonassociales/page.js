"use client";
import React, {useRef} from 'react';
import ZonasSocialesHeader from '@/components/ZonasSocialesHeader';
import ZonasSocialesQuad from '@/components/ZonasSocialesQuad';
import ZonasSocialesCarousel from '@/components/ZonasSocialesCarousel';

const Zonassociales = () => {

  const sectionRef = useRef(null);

  const scrollToSection = () => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <>
      <ZonasSocialesHeader scrollDown={scrollToSection}/>
      <ZonasSocialesQuad 
        imageSrc="images/home_page_background_2.jpg" /* Replace with your image URL */
        title="Lobby"
        subtitle="Doble altura"
        text="This is some example text content for the section.This is some example text content for the section.This is some example text content for the section.This is some example text content for the section."
        scrollRef={sectionRef}
      />
      <ZonasSocialesCarousel />
    </>
  )
}

export default Zonassociales;