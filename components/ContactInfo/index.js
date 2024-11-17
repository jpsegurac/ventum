import React from 'react';
import styles from '@/styles/ContactInfo.module.scss';

const ContactInfo = ({officeName,email, phone, adress, city}) => {
    return (
        <div className={styles.contactInfoContainer}>
            <div className={styles.contactInfo}>
                <hr className={styles.customLine}/>
                <div>
                    <h1 className={styles.contactInfoTitle}>{officeName}</h1>
                </div>
                <div className={styles.contactInfoContent}>
                    <div className={styles.contactInfoItem}>
                        <strong><div>{email}</div></strong>
                    </div>
                    <div className={styles.contactInfoItem}>
                        <div>{phone}</div>
                    </div>
                    <div className={styles.contactInfoItem}>
                        <div>{adress}</div>
                    </div>
                    <div className={styles.contactInfoItem}>
                        <div>{city}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactInfo;