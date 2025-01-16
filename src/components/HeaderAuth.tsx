import "../styles/HeaderAuth.scss";

const HeaderAuth = () => {
  return (
    <div className="auth-container">
      <button className="login-button">Login</button>
      <div className="seperator-line"></div>
      <button className="register-button">Register</button>
      {/* 로그인 되었을 때 */}
      {/* <button>Log out</button> */}
      {/* 이름 눌렀을 때 드랍다운 - 마이페이지? */}
      {/* <p>사용자 이름</p> */}
    </div>
  );
};

export default HeaderAuth;
