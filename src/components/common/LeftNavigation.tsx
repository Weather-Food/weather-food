import styles from "../../styles/common/LeftNavigation.module.scss";
import { NavigationProps } from "../../interfaces/navigation";
import React, { useState } from "react";

// icons for food categories
import { SiIfood } from "react-icons/si";
import { FaBowlFood } from "react-icons/fa6";
import { GiNoodles } from "react-icons/gi";
import { CiForkAndKnife } from "react-icons/ci";
import { PiBowlFoodFill } from "react-icons/pi";
import { NavigationIcon } from "../../types/navigation";

const LeftNavigation: React.FC<NavigationProps> = ({ title, tabs }) => {
  // tabs의 가장 첫 번째 탭으로 기본 설정
  const [currentTab, setCurrentTab] = useState<string>(tabs[0]);

  const iconMap: NavigationIcon = {
    전체: <CiForkAndKnife />,
    한식: <FaBowlFood />,
    중식: <GiNoodles />,
    일식: <PiBowlFoodFill />,
    양식: <SiIfood />,
  };

  const clickTabHandler = (tab: string): void => {
    setCurrentTab(tab);
  };

  // const showTabIcon = (tab: string):

  return (
    <div className={styles.leftNavigation__container}>
      <div className={styles.navigationTitle}>{title}</div>
      <section className={styles.tabsContainer}>
        {tabs.map((tab: string) => (
          <div
            className={
              tab === currentTab
                ? `${styles.activeEachTab__container}`
                : `${styles.eachTab__container}`
            }
            key={tab}
            onClick={() => clickTabHandler(tab)}
          >
            {iconMap[tab]}
            <p>{tab}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default LeftNavigation;
