import React from "react";
import styles from "@/styles/ApartmentsApartment.module.scss";
import ApartmentsArea from "../ApartmentsArea";


const ApartmentsApartment = ({type, privateArea, constructedArea, floorLocationImageName, apartmentDistribution, buttonUrl}) => {

    return (
        <div className={styles.container}>
          <div className={styles.infoPanel}>
            <div className={styles.typeText}>
                <span className={styles.typeTextTitle}>Apartamento </span>
                <span className={styles.typeTextType}>{type.toUpperCase()}</span>
                </div>
            <div className={styles.areaInfo}>
                <ApartmentsArea label='Área privada' area={privateArea} />
                <ApartmentsArea label='Área construida' area={constructedArea} />
            </div>
            <div className={styles.floorPlan}>
              <img
                src={`/path/to/${floorLocationImageName}.png`}
                alt="Floor plan thumbnail"
                className={styles.thumbnail}
              />
            </div>
            <button className={styles.button}>¡Lo quiero!</button>
          </div>
          <div className={styles.layoutImageContainer}>
            <img
              src={`${apartmentDistribution}.jpg`}
              alt="Apartment layout"
              className={styles.layoutImage}
            />
          </div>
        </div>
      );
}   
export default ApartmentsApartment;

