import styles from "@/styles/page.module.css";
import Image from "next/image";
/* -- Assets --*/
import home_background from '@/assets/images/home_page_background.jpg';

const Home = () => {
  return (
      <section className={styles.backgroundImage}>
        <Image
          src={home_background}
          fill={true}
          alt="home_background"
        />
      </section>
  );
}
export default Home;