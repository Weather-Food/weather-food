import styles from "../../styles/common/HeaderAuth.module.scss";

const HeaderAuth = () => {
  return (
    <div className={styles.authContainer}>
      <button className={styles.loginButton}>Login</button>
      <div className={styles.seperatorLine}></div>
      <button className={styles.registerButton}>Register</button>
      {/* 로그인 되었을 때 */}
      {/* <button>Log out</button> */}
      {/* 이름 눌렀을 때 드랍다운 - 마이페이지? */}
      {/* <p>사용자 이름</p> */}
    </div>
  );
};

export default HeaderAuth;
