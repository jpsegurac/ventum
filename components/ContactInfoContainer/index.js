import react from "react";
import styles from "@/styles/ContactInfoContainer.module.scss";
import ContactInfo from "../ContactInfo";
import ContactForm from "../ContactForm";
import SocialNetwork from "../SocialNetwork";

const info = [
  {
    officeName: "Oficina Principal",
    email: "ventas@edificoventum.com",
    phone: "809-555-5555",
    adress: "Carrera 49D # 98B-11",
    city: "Baranquilla, Colombia",
  },
  {
    officeName: "Oficina Principal",
    email: "ventas@edificoventum.com",
    phone: "809-555-5555",
    adress: "Carrera 49D # 98B-11",
    city: "Baranquilla, Colombia",
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
      <div className={styles.ContactInfo}>
      {renderedInfo}
      <SocialNetwork />
      </div>
      <ContactForm />
      </div>
  );
};

export default ContactInfoContainer;


