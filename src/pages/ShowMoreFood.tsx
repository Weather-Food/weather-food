import "../styles/ShowMoreFood/index.scss";

import LeftNavigation from "../components/common/LeftNavigation";
import MoreFoodMain from "../components/ShowMoreFood/MoreFoodMain";
import { cuisines } from "../constants/food";

const ShowMoreFood = () => {
  return (
    <div className="show-more-food--container">
      <LeftNavigation title="음식 카테고리" tabs={cuisines} />
      <MoreFoodMain />
    </div>
  );
};

export default ShowMoreFood;
