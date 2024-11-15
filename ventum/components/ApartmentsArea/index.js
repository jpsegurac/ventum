import React from "react";
import styles from "@/styles/ApartmentsArea.module.scss";

const ApartmentsArea = ({label, area}) => {
    return (
        <div className={styles.container}>
        <span className={styles.area}>{area} m²</span>
        <h2 className={styles.label}>{label}</h2>
        </div>
    );
}
export default ApartmentsArea;

