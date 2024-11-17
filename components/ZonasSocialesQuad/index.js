import React from 'react';
import styles from './ZonasSocialesQuad.module.scss';

const ZonasSocialesQuad = ({ imageSrc, text, title, subtitle, scrollRef }) => {
    return (
        <div className={styles.quadSection} ref={scrollRef}>
            <div className={styles.quadSectionContainer}>
                <div className={styles.imageContainer}>
                    <img src={imageSrc} alt="Section" />
                </div>
                <div className={styles.textContainer}>
                    <div className={styles.title}>
                        <h2 >{title}</h2>
                        <h2><span>{subtitle}</span></h2>
                    </div>
                    <div className={styles.copy}>
                        <p>{text}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ZonasSocialesQuad;
