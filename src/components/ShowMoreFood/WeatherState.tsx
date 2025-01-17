import "../../styles/ShowMoreFood/WeatherState.scss";

const WeatherState = () => {
  return (
    <section className="weather-state--container">
      <p className="weather-temperature">기온</p>
      <div className="weather-info--container">
        <p className="weather-state">상태</p>
        <p className="weather-hpa">720hpa</p>
        <p className="weather-pricipitation">32%</p>
        <p className="weather-wind">12km/h</p>
      </div>
    </section>
  );
};

export default WeatherState;
