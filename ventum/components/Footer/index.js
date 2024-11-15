import styles from '@/styles/Footer.module.scss';

/* -- Assets --*/
import FooterLogo from '@/assets/logos/footer_logo.svg';
import FooterSpeak from '@/assets/icons/speak_button.svg';
import FacebookLogo from '@/assets/icons/facebook.svg';
import InstagramLogo from '@/assets/icons/instagram.svg';
import LinkedinLogo from '@/assets/icons/linkedin.svg';
import TiktokLogo from '@/assets/icons/tiktok.svg';
import WhatsappLogo from '@/assets/icons/whatsapp.svg';


const Footer = () => {
    const CONTACT_INFO = {
        email: "ventas@edificioventum.com",
        phone_number: "(+57) 315 768 8122",
        address: "Carrera 49D # 98B-11",
        location: "Barranquilla, Colombia",
    };
    return (
        <footer className={styles.footer}>
            <section className={styles.footer_section}>
                <h5><strong>{CONTACT_INFO.email}</strong></h5>
                <h5>{CONTACT_INFO.phone_number}</h5>
                <h5>{CONTACT_INFO.address}</h5>
                <h5>{CONTACT_INFO.location}</h5>
                <div className={styles.footer_speak}>
                    <FooterSpeak width="155px" height="auto"/>
                    <h2 className={styles.footer_speak_text}>¡Hablemos!</h2>
                </div>
            </section>
            <section className={styles.footer_section}>
                <FooterLogo width="100px" height="50px"/>
                <h5>Todos los derechos reservados ©</h5>
            </section>
            <section className={styles.footer_section}>
                <h5>Encuentranos en:</h5>
                <div className={styles.footer_logos}>
                    <FacebookLogo width="20px" height="20px"/>
                    <InstagramLogo width="20px" height="20px"/>
                    <LinkedinLogo width="20px" height="20px"/>
                    <TiktokLogo width="20px" height="20px"/>
                    <WhatsappLogo width="20px" height="20px"/>
                </div>
            </section>
        </footer>
    );
}

export default Footer;