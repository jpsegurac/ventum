"use client";
import React,{ useState, useEffect} from "react";
import styles from "@/styles/ApartmentsNavigator.module.scss";
import apartments from "./apartments";
import ApartmentsApartment from "../ApartmentsApartment";

const ApartmentsNavigator = () => {
    const [selectedApartment, setSelectedApartment] = useState(apartments["Tipo A"]);
    const navigation = Object.keys(apartments).map((type) => {
        return (
            <span className={`${styles.selection} ${type===selectedApartment?.type ? styles['selection--selected'] : ''}`} key={type} onClick={() => setSelectedApartment(apartments[type])}>
                {type}
            </span>
        );
    });
    return(
        <>
        <div className={styles.navigatorContianer}>
        {navigation}
        </div>
        <ApartmentsApartment type={selectedApartment?.type} privateArea={selectedApartment?.privateArea}
         constructedArea={selectedApartment?.constructedArea}
         floorLocationImageName={selectedApartment?.floorLocationImageName}
         apartmentDistribution={selectedApartment?.apartmentDistribution}
         buttonUrl={selectedApartment?.buttonUrl}
        />

        </>
    )
     

}
export default ApartmentsNavigator; 
