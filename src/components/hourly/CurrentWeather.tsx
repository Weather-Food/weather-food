import React from "react";
import styles from "../../styles/Hourly/CurrentWeather.module.scss";
import { CurrentWeatherProps } from "./interfaces";

export const CurrentWeather: React.FC<CurrentWeatherProps> = ({
  currentWeather,
  getWeatherImage,
}) => {
  return (
    <>
      {currentWeather && (
        <div className={styles.currentWeather}>
          <div>
            <div className={styles.currentInfo}>
              <img
                src={getWeatherImage(currentWeather.weather)}
                alt={currentWeather.weather}
                className={styles.currentWeatherImage}
              />
              <p className={styles.currentTemperature}>
                {currentWeather.temperature}°C
              </p>
            </div>
            <p className={styles.currentWeatherDescription}>
              {currentWeather.weather}
            </p>
          </div>

          <div className={styles.currentWeatherInfo}>
            <p>5:19PM</p>

            <p>
              <img
                src={"/svg/hourly/windy-cloudy.svg"}
                className={styles.currentWindSpeedImage}
              />
              : {currentWeather.windSpeed} km/h
            </p>
            <p>
              <img
                src={"/svg/hourly/humidity-rain.svg"}
                className={styles.currentHumidityImage}
              />
              : {currentWeather.humidity}%
            </p>
          </div>
        </div>
      )}
    </>
  );
};
