import "../../styles/ShowMoreFood/MoreFoodMain.scss";

import FoodSection from "./FoodSection";
import RecommendStatement from "./RecommendStatement";
import WeatherState from "./WeatherState";

const MoreFoodMain = () => {
  return (
    <main className="more-food-main">
      <WeatherState />
      <RecommendStatement />
      <FoodSection />
    </main>
  );
};

export default MoreFoodMain;
