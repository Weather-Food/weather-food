import React from "react";

interface WeatherData {
  time: string; // 시간
  temperature: number; // 온도
  weather: string; // 날씨
  windSpeed: number; // 풍량
  humidity: number; // 습도
}

interface CurrentWeatherProps {
  currentWeather: WeatherData;
  getWeatherImage: (weather: string) => string;
}

export const CurrentWeather: React.FC<CurrentWeatherProps> = ({
  currentWeather,
  getWeatherImage,
}) => {
  return (
    <>
      {currentWeather && (
        <div className="current-weather">
          <h3>5:19PM</h3>
          <img
            src={getWeatherImage(currentWeather.weather)}
            alt={currentWeather.weather}
            className="current-weather-image"
          />
          <div className="current-weather-info">
            <p className="current-temperature">
              {currentWeather.temperature}°C
            </p>
            <p>{currentWeather.weather}</p>
            <p>Wind: {currentWeather.windSpeed} km/h</p>
            <p>Humidity: {currentWeather.humidity}%</p>
          </div>
        </div>
      )}
    </>
  );
};
