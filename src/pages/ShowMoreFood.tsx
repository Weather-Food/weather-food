import "../styles/ShowMoreFood/index.scss";

import BreadCrumb from "../components/ShowMoreFood/FoodBreadCrumb";
import FoodSection from "../components/ShowMoreFood/FoodSection";
import WeatherState from "../components/ShowMoreFood/WeatherState";
import RecommendStatement from "../components/ShowMoreFood/RecommendStatement";

const ShowMoreFood = () => {
  return (
    <div className="show-more-food--container">
      <section className="weather-section">
        <WeatherState />
        <RecommendStatement />
      </section>
      <section className="food-section">
        <BreadCrumb />
        <FoodSection />
      </section>
    </div>
  );
};

export default ShowMoreFood;
