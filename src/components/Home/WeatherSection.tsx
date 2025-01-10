import "../../styles/Home/WeatherSection.scss";

const WeatherSection = () => {
  return (
    <section className="weather-container">
      <div className="location-time--container">
        <div className="location-container">
          <img className="location-icon" />
          <p className="location">지역명</p>
        </div>
        <p className="time">Today 12:32 PM</p>
      </div>
      <div className="temperature-container">
        <p className="temperature">11도</p>
        <p>Rain</p>
      </div>
      <div className="condition-container">
        <div className="hpa-container">
          <img />
          <p>720hpa</p>
        </div>
        <div className="pricipitation-container">
          <img />
          <p>32%</p>
        </div>
        <div className="wind-container">
          <img />
          <p>12km/h</p>
        </div>
      </div>
    </section>
  );
};

export default WeatherSection;
