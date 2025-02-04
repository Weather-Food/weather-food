import styles from "../../styles/Home/HeroSection.module.scss";
import Recommendation from "./Recommendation";
import WeatherSection from "./WeatherSection";

const HeroSection = () => {
  return (
    <div className={styles.backgroundImage}>
      <div className={styles.weatherRecommendation__container}>
        <WeatherSection />
        <Recommendation />
      </div>
    </div>
  );
};

export default HeroSection;
