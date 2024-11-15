import React from "react";
import styles from "@/styles/ApartmentsPageWrapper.module.scss";
import ApartmentsNavigator from "../ApartmentsNavigator";


const ApartmentsPageWrapper = ({children}) => {

    return (
        <div className={styles.container}>
            <img
                        className={styles.carousel_image}
                        src="images/home_page_background_1.jpg"
                        alt="home_page_background_1"
                    />
                    <div>ESTOOO</div>
            <ApartmentsNavigator />
        </div>
    );
}

export default ApartmentsPageWrapper;