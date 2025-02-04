import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "../../styles/common/Header.module.scss";
import HeaderMenu from "./HeaderMenu";
import HeaderAuth from "./HeaderAuth";

const Header = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const getActiveClass = ({ isActive }: { isActive: boolean }): string => {
    return isActive ? styles.activeTab : styles.tab;
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, []);

  return (
    <div className={styles.headerContainer}>
      <div className="logo-container">
        <p>Weather</p>
      </div>
      <div className={styles.navigationContainer}>
        <NavLink to="/" className={getActiveClass}>
          홈
        </NavLink>
        <NavLink to="/hourly" className={getActiveClass}>
          시간별 날씨
        </NavLink>
        <p className="tab">음식 추천</p>
      </div>
      {width < 600 ? <HeaderMenu /> : <HeaderAuth />}
    </div>
  );
};

export default Header;
