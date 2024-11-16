import React from "react";
import MainWrapper from "@/components/MainWrapper";

/* -- Styles --*/
import styles from "@/styles/page.module.scss";
import ContactBanner from "@/components/ContactBanner";
import ContactInfo from "@/components/ContactInfo";
import ContactForm from "@/components/ContactForm";
import ContactInfoContainer from "@/components/ContactInfoContainer";

const contacto = () => {
  return (
    <MainWrapper>
      <ContactBanner />
      <ContactInfoContainer />
    </MainWrapper>
  );
};

export default contacto;
