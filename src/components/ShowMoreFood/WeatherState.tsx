import styles from "../../styles/ShowMoreFood/WeatherState.module.scss";

// icons
import { WiDayCloudy } from "react-icons/wi";

const WeatherState = () => {
  return (
    <section className={styles.weatherState__container}>
      <div className={styles.weatherLeftState}>
        {/* 현재 날씨에 맞는 아이콘 배치 */}
        <WiDayCloudy className={styles.weatherIcon} />
        <div className={styles.temperatureState}>
          <strong className={styles.temp}>
            11<span className={styles.temperatureIcon}>°C</span>
          </strong>
          {/* 현재 위치와 날씨 상태 삽입하기 */}
          <p className={styles.locationState}>인천광역시 - 흐림</p>
        </div>
      </div>
      <div className={styles.weatherRightState}>
        <p className={styles.humidity}>
          습도: <span>65</span>%
        </p>
        <p className={styles.windSpeed}>
          바람: <span>3</span>m/s
        </p>
      </div>
    </section>
  );
};

export default WeatherState;
