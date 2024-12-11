import react from "react";
import styles from "@/styles/ContactInfoContainer.module.scss";
import ContactInfo from "../ContactInfo";
import ContactForm from "../ContactForm";
import SocialNetwork from "../SocialNetwork";

import LogoContact from '@/assets/icons/contact_phone_logo.svg';

const info = [
  {
    officeName: "SHOWROOM BARRANQUILLA",
    email: "ventas@edificoventum.com",
    phone: "809-555-5555",
    adress: "Carrera 49D # 98B-11",
    city: "Baranquilla, Colombia",
  },
  {
    officeName: "OFICINAS BOGOTÁ",
    email: "ventas@edificoventum.com",
    phone: "809-555-5555",
    adress: "Calle 26 # 32-32",
    city: "Bogotá, Colombia",
  },
];

const ContactInfoContainer = () => {
  const renderedInfo = info.map((info) => {
    return (<ContactInfo
      officeName={info.officeName}
      email={info.email}
      phone={info.phone}
      adress={info.adress}
      city={info.city}
      key={info.officename}
    />)
  });

  return (
    <div className={styles.contactContainer}>
      <a className={styles.headerCta}>
        <LogoContact className={styles.Phone} />
        ¡Chatea con nosotros!
      </a>
      <div className={styles.ContactInfo}>
        {renderedInfo}
        <SocialNetwork />
      </div>
      <ContactForm />
    </div>
  );
};

export default ContactInfoContainer;


