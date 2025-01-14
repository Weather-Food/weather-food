import "../../styles/Home/WeatherSection.scss";

const WeatherSection = () => {
  return (
    <section className="weather-container">
      <div className="location-time--container">
        <div className="location-container">
          <img
            className="location-icon"
            src="./Home/location.svg"
            alt="location"
          />
          <strong className="location">인천</strong>
        </div>
        <p className="time">Today 12:32 PM</p>
      </div>
      <div className="temperature-container">
        <p className="temperature">
          11<span className="temperature-icon">°</span>
        </p>
        <p className="state">Rain</p>
      </div>
      <div className="condition-container">
        <div className="hpa-container">
          {/* 여기 hpa 정보는 다른 걸로 대체 예정 */}
          <img className="hpa-icon" src="./Home/wind.svg" alt="hpa" />
          <p>720hpa</p>
        </div>
        <div className="pricipitation-container">
          <img
            className="pricipitation-icon"
            src="./Home/raindrop.svg"
            alt="pricipitation"
          />
          <p>32%</p>
        </div>
        <div className="wind-container">
          <img className="wind-icon" src="./Home/wind.svg" alt="wind" />
          <p>12km/h</p>
        </div>
      </div>
    </section>
  );
};

export default WeatherSection;
