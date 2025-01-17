import "../../styles/ShowMoreFood/FoodBreadCrumb.scss";
import { cuisines } from "../../constants/food";

const FoodBreadCrumb = () => {
  return (
    <div className="food-breadcrumb--container">
      {cuisines.map((cuisine: string) => (
        <div className="cuisine-container">
          <p>{cuisine}</p>
        </div>
      ))}
    </div>
  );
};

export default FoodBreadCrumb;
