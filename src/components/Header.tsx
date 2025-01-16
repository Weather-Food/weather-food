import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Header.scss";
import HeaderMenu from "./HeaderMenu";
import HeaderAuth from "./HeaderAuth";

const Header = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const getActiveClass = ({ isActive }: { isActive: boolean }): string => {
    return isActive ? "active-tab" : "tab";
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, []);

  return (
    <div className="header-container">
      <div className="logo-container">
        <p>Weather</p>
      </div>
      <div className="navigation-container">
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
