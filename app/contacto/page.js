import React from "react";
import Image from "next/image";
import ContactBanner from "@/components/ContactBanner";
import ContactInfoContainer from "@/components/ContactInfoContainer";
/* -- Styles --*/
import styles from "@/styles/Contact.module.scss";

/* -- Assets -- */ 
import background_image from '@/assets/images/home_page_background_2.jpg';


const contacto = () => {
  return (
    <>
      <ContactBanner />
      <ContactInfoContainer />
      <div className={styles.blankSpace}/>
      <div className={styles.background_image}>
        <Image
            src={background_image}
            alt="background_image"
            fill={true}
        />
      </div>
      
    </>
  );
};

export default contacto;
