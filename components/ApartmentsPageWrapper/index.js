import React from "react";
import styles from "@/styles/ApartmentsPageWrapper.module.scss";
import ApartmentsNavigator from "../ApartmentsNavigator";


const ApartmentsPageWrapper = ({children}) => {

    return (
        <div className={styles.container}>
            <ApartmentsNavigator />
        </div>
    );
}

export default ApartmentsPageWrapper;