import MainWrapper from "@/components/MainWrapper";
import HomeCarousel from "@/components/HomeCarousel";
import LifeStyle from "@/components/LifeStyle";
import HomeApartments from "@/components/HomeApartments";
import HomeExtraInfo from "@/components/HomeExtraInfo";
import HomeAirView from "@/components/HomeAirView";


const Home = () => {
  return (
      <MainWrapper>
        <HomeCarousel />
        <LifeStyle />
        <HomeApartments />
        <HomeExtraInfo />
        <HomeAirView />
      </MainWrapper>
  );
}
export default Home;