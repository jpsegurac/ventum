import React from 'react';
import SocialArea from '@/components/SocialArea';
/* -- Styles --*/
import styles from "@/styles/HomeSocial.module.scss";
/* -- Assets --*/
import BuildingIcon from '@/assets/icons/1_building.svg';
import ParkingIcon from '@/assets/icons/2_parking.svg';
import RoofTopIcon from '@/assets/icons/3_rooftop.svg';
import LobbyIcon from '@/assets/icons/4_lobby.svg';
import PoolIcon from '@/assets/icons/5_pool.svg';
import SaunaIcon from '@/assets/icons/6_sauna.svg';
import BbqIcon from '@/assets/icons/7_bbq.svg';
import GamesIcon from '@/assets/icons/8_games.svg';
import GymIcon from '@/assets/icons/9_gym.svg';
import HomeSocialZones from '@/assets/icons/home_social_zones.svg';


const social_areas = {
    building:  "80 apartamentos en 8 pisos",
    parking:  "4 pisos de parqueaderos",
    roofTop:  "Terraza club house",
    lobby:  "Lobby doble altura",
    pool:  "Piscina y jacuzzi",
    sauna:  "Sauna y turco",
    bbq:  "Salón comunal y zona bbq",
    games:  "Zona de juegos infantiles, salon de juegos",
    gym:  "Gimnasio cubierto y al aire libre",
}

const HomeSocial = () => {
    return (
        <section className={styles.homeSocial}>
            <h1 className={styles.homeSocial_title}>EL PROYECTO CUENTA CON:</h1>
            <div className={styles.homeSocial_grid}>
                <SocialArea className={styles.building } AreaLogo={BuildingIcon} AreaText={social_areas.building}/>
                <SocialArea className={styles.parking} AreaLogo={ParkingIcon} AreaText={social_areas.parking}/>
                <SocialArea className={styles.roofTop} AreaLogo={RoofTopIcon} AreaText={social_areas.roofTop}/>
                <SocialArea className={styles.lobby} AreaLogo={LobbyIcon} AreaText={social_areas.lobby}/>
                <SocialArea className={styles.pool} AreaLogo={PoolIcon} AreaText={social_areas.pool}/>
                <SocialArea className={styles.sauna} AreaLogo={SaunaIcon} AreaText={social_areas.sauna}/>
                <SocialArea className={styles.bbq} AreaLogo={BbqIcon} AreaText={social_areas.bbq}/>
                <SocialArea className={styles.games} AreaLogo={GamesIcon} AreaText={social_areas.games}/>
                <SocialArea className={styles.gym} AreaLogo={GymIcon} AreaText={social_areas.gym}/>
            </div>
            <div className={styles.knowSocialZones}>
                <a className={styles.knowSocialZonesCta} href='/zonassociales'>Conoce nuestras zonas sociales</a>
            </div>
        </section>
    );
};
export default HomeSocial;