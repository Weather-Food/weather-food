import "../../styles/ShowMoreFood/WeatherState.scss";

// icons
import { WiDayCloudy } from "react-icons/wi";

const WeatherState = () => {
  return (
    <section className="weather-state--container">
      <div className="weather-left-state">
        {/* 현재 날씨에 맞는 아이콘 배치 */}
        <WiDayCloudy className="weather-icon" />
        <div className="temperature-state">
          <strong className="temp">
            11<span className="temperature-icon">°C</span>
          </strong>
          {/* 현재 위치와 날씨 상태 삽입하기 */}
          <p className="location-state">인천광역시 - 흐림</p>
        </div>
      </div>
      <div className="weather-right-state">
        <p className="humidity">
          습도: <span>65</span>%
        </p>
        <p className="wind-speed">
          바람: <span>3</span>m/s
        </p>
      </div>
    </section>
  );
};

export default WeatherState;
