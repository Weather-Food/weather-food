import { cuisines } from "../../constants/food";
import "../../styles/common/LeftNavigation.scss";
import { NavigationProps } from "../../interfaces/navigation";

const LeftNavigation: React.FC<NavigationProps> = ({ title, tabs }) => {
  return (
    <div className="left-navigation--container">
      <div>{title}</div>
      {tabs.map((tab: string) => (
        <div className="tab-container">
          <p>{tab}</p>
        </div>
      ))}
    </div>
  );
};

export default LeftNavigation;
