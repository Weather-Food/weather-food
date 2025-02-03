import styles from "../../styles/common/Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className="icons-container"></div>
      <div className="logo-container">Weather</div>
      <div className={styles.rightContainer}>
        <img className="right-icon" />
        <p>2025 Weather. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
