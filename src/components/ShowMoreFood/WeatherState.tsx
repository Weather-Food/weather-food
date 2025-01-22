import "../../styles/ShowMoreFood/WeatherState.scss";

const WeatherState = () => {
  return (
    <section className="weather-state--container">
      <div className="weather-left-state">
        <img className="weather-icon" />
        <div className="temperature-state">
          <strong className="temp">
            11<span className="temperature-icon">°C</span>
          </strong>
          {/* 현재 위치와 날씨 상태 삽입하기 */}
          <p>인천광역시 - 흐림</p>
        </div>
      </div>
      <div className="weather-right-state">
        <p>
          습도: <span>65</span>%
        </p>
        <p>
          바람: <span>3</span>m/s
        </p>
      </div>
    </section>
  );
};

export default WeatherState;
