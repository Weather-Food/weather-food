import styles from "../../styles/ShowMoreFood/MoreFoodMain.module.scss";

import FoodSection from "./FoodSection";
import RecommendStatement from "./RecommendStatement";
import WeatherState from "./WeatherState";

const MoreFoodMain = () => {
  return (
    <main className={styles.moreFoodMain}>
      <WeatherState />
      <RecommendStatement />
      <FoodSection />
    </main>
  );
};

export default MoreFoodMain;
