import React from 'react';
import styles from '@/styles/ContactInfo.module.scss';

const ContactInfo = ({officeName,email, phone, adress, city}) => {
    return (
        <div className={styles.contactInfoContainer}>
            <div className={styles.contactInfo}>
                <hr className={styles.customLine}/>
                <div className={styles.contactInfoTitle}>
                    <h1>{officeName}</h1>
                </div>
                <div className={styles.contactInfoContent}>
                    <div className={styles.contactInfoItem}>
                        <div>{email}</div>
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