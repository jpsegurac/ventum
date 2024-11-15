import React from 'react';

/* -- Styles --*/
import styles from "@/styles/SocialArea.module.scss";

const SocialArea = ({AreaLogo, AreaText}) => {
    return (
        <div className={styles.socialArea}>
            <AreaLogo className={styles.socialArea_logo} color={"#FFFFFF"}/>
            <h4 className={styles.socialArea_text}>{AreaText}</h4>
        </div>
    );
};
export default SocialArea;