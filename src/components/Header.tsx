import { NavLink } from "react-router-dom";
import "../scss/Header.scss";

const Header = () => {
  const getActiveClass = ({ isActive }: { isActive: boolean }): string => {
    return isActive ? "active-tab" : "tab";
  };

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
      <div className="auth-container">
        <button className="login-button">Login</button>
        <div className="seperator-line"></div>
        <button className="register-button">Register</button>
        {/* 로그인 되었을 때 */}
        {/* <button>Log out</button> */}
        {/* 이름 눌렀을 때 드랍다운 - 마이페이지? */}
        {/* <p>사용자 이름</p> */}
      </div>
    </div>
  );
};

export default Header;
