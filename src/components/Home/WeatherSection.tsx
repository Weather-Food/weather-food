import styles from "../../styles/Home/WeatherSection.module.scss";

const WeatherSection = () => {
  return (
    <section className={styles.weatherContainer}>
      <div className={styles.locationTime__container}>
        <div className={styles.locationContainer}>
          <img
            className={styles.locationIcon}
            src="./Home/location.svg"
            alt="location"
          />
          <strong className={styles.location}>인천광역시</strong>
        </div>
        <p className={styles.todayTime}>Today 12:32 PM</p>
      </div>
      <div className={styles.temperatureContainer}>
        <p className={styles.temperature}>
          11<span className={styles.temperatureIcon}>°C</span>
        </p>
        <p className={styles.state}>흐림</p>
      </div>
      <div className={styles.conditionContainer}>
        <div className={styles.hpaContainer}>
          {/* 여기 hpa 정보는 다른 걸로 대체 예정 */}
          <img className={styles.hpaIcon} src="./Home/wind.svg" alt="hpa" />
          <p>720hpa</p>
        </div>
        <div className={styles.pricipitationContainer}>
          <img
            className={styles.pricipitationIcon}
            src="./Home/raindrop.svg"
            alt="pricipitation"
          />
          <p>32%</p>
        </div>
        <div className={styles.windContainer}>
          <img className={styles.windIcon} src="./Home/wind.svg" alt="wind" />
          <p>3m/s</p>
        </div>
      </div>
    </section>
  );
};

export default WeatherSection;
