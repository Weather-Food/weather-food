import "../../styles/Home/HeroSection.scss";
import Recommendation from "./Recommendation";
import WeatherSection from "./WeatherSection";

const HeroSection = () => {
  return (
    <div className="background-image">
      <div className="weather-recommendation--container">
        <WeatherSection />
        <Recommendation />
      </div>
    </div>
  );
};

export default HeroSection;
