import React from "react";
import "../../styles/Hourly/CurrentWeather.scss";
import { CurrentWeatherProps } from "./interfaces";

export const CurrentWeather: React.FC<CurrentWeatherProps> = ({
  currentWeather,
  getWeatherImage,
}) => {
  return (
    <>
      {currentWeather && (
        <div className="current-weather">
          <div>
            <div className="current-info">
              <img
                src={getWeatherImage(currentWeather.weather)}
                alt={currentWeather.weather}
                className="current-weather-image"
              />
              <p className="current-temperature">
                {currentWeather.temperature}°C
              </p>
            </div>
            <p className="current-weather-description">
              {currentWeather.weather}
            </p>
          </div>

          <div className="current-weather-info">
            <p>5:19PM</p>

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
