import "../../styles/common/LeftNavigation.scss";
import { NavigationProps } from "../../interfaces/navigation";

const LeftNavigation: React.FC<NavigationProps> = ({ title, tabs }) => {
  return (
    <div className="left-navigation--container">
      <div className="navigation-title">{title}</div>
      <section className="tabs-container">
        {tabs.map((tab: string) => (
          <div className="each-tab--container" key={tab}>
            <p>{tab}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default LeftNavigation;
