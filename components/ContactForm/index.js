import React from 'react';
import styles from '@/styles/ContactForm.module.scss';

const ContactForm = () => {
    return (
        <div className={styles.contactFormContainer}>
            <form className={styles.contactForm}>
                <div className={styles.contactFormTitle}>
                    <h1>Contáctanos</h1>
                </div>
                <div className={styles.contactFormInput}>
                    <input className={styles.input} type="text" placeholder="Correo" />
                    <input className={styles.input} type="text" placeholder="Nombre" />
                    <input className={styles.input} type="text" placeholder="Teléfono" />
                    <textarea className={styles.input} placeholder="Mensaje" />
                </div>
                <div className={styles.contactFormButton}>
                <button className={styles.button}>Enviar</button>
                </div>
            </form>
        </div>
    );
}

export default ContactForm;