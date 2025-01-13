import React from "react";
import "./CurrentWeather.scss";

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
          <img
            src={getWeatherImage(currentWeather.weather)}
            alt={currentWeather.weather}
            className="current-weather-image"
          />
          <p className="current-temperature">{currentWeather.temperature}°C</p>
          <div className="current-weather-info">
            <p>5:19PM</p>
            <p>{currentWeather.weather}</p>
            <p>
              <img
                src={"/svg/hourly/windy-cloudy.svg"}
                className="current-windSpeed-image"
              />
              : {currentWeather.windSpeed} km/h
            </p>
            <p>
              <img
                src={"/svg/hourly/humidity-rain.svg"}
                className="current-humidity-image"
              />
              : {currentWeather.humidity}%
            </p>
          </div>
        </div>
      )}
    </>
  );
};
