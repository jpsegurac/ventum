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
                <p><strong>{CONTACT_INFO.email}</strong></p>
                <p>{CONTACT_INFO.phone_number}</p>
                <p>{CONTACT_INFO.address}</p>
                <p>{CONTACT_INFO.location}</p>
                <div className = {styles.footer_speak}>
                    <a className={styles.footer_speakCta}>¡Hablemos!</a>
                </div>
            </section>
            <section className={styles.footer_section}>
                <FooterLogo width="100px" height="50px"/>
                <p>Todos los derechos reservados ©</p>
            </section>
            <section className={styles.footer_section}>
                <p>Encuentranos en:</p>
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