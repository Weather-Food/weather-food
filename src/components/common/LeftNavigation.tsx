import "../../styles/common/LeftNavigation.scss";
import { NavigationProps } from "../../interfaces/navigation";
import { useState } from "react";

const LeftNavigation: React.FC<NavigationProps> = ({ title, tabs }) => {
  // tabs의 가장 첫 번째 탭으로 기본 설정
  const [currentTab, setCurrentTab] = useState<string>(tabs[0]);

  const clickTabHandler = (tab: string): void => {
    setCurrentTab(tab);
  };

  return (
    <div className="left-navigation--container">
      <div className="navigation-title">{title}</div>
      <section className="tabs-container">
        {tabs.map((tab: string) => (
          <div
            className={
              tab === currentTab
                ? "active-each-tab--container"
                : "each-tab--container"
            }
            key={tab}
            onClick={() => clickTabHandler(tab)}
          >
            <img className="tab-icon" />
            <p>{tab}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default LeftNavigation;
