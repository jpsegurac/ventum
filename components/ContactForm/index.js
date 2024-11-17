import React from 'react';
import styles from '@/styles/ContactForm.module.scss';

const ContactForm = () => {
    return (
        <div className={styles.contactFormContainer}>
            <form className={styles.contactForm}>
                <div className={styles.contactFormTitle}>
                    <h1>DÉJANOS TUS DATOS</h1>
                    <h3>y nos pondremos en contacto contigo</h3>
                </div>
                <div className={styles.contactFormInput}>
                    <input className={styles.input} type="text" placeholder="NOMBRE" />
                    <input className={styles.input} type="text" placeholder="TELÉFONO" />
                    <input className={styles.input} type="text" placeholder="CORREO ELECTRÓNICO" />
                    <textarea className={styles.input_textArea} placeholder="MENSAJE" />
                </div>
                <div className={styles.contactFormButton}>
                <button className={styles.button}>Enviar</button>
                </div>
            </form>
        </div>
    );
}

export default ContactForm;