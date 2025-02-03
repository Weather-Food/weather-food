import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../../styles/Hourly/HourlyWeather.module.scss";
import { HourlyWeatherProps } from "./interfaces";

export const HourlyWeather: React.FC<HourlyWeatherProps> = ({
  weatherData,
  getWeatherImage,
}) => {
  const currentTime = new Date().getHours();
  const currentIndex = weatherData.findIndex(
    (data) => new Date(data.time).getHours() === currentTime
  );

  const settings = {
    dots: true,
    infinite: false,
    speed: 800,
    slidesToShow: 9,
    slidesToScroll: 9,
    initialSlide: currentIndex,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {weatherData.map((data, index) => {
        const dataTime = new Date(data.time).getHours();
        const isCurrentTime = dataTime === currentTime;

        return (
          <div
            key={index}
            className={`${styles.hourlyCard} ${
              isCurrentTime ? styles.currentTime : ""
            }`}
          >
            <div className={styles.hourlyInfo}>
              <img
                src={getWeatherImage(data.weather)}
                alt={data.weather}
                className={styles.weatherImage}
              />
              <p className={styles.temperature}>{data.temperature}°C</p>
              <p className={styles.weather}>{data.weather}</p>
              <p className={styles.time}>
                {new Date(data.time)
                  .toLocaleTimeString([], {
                    hour: "2-digit",
                    hour12: false,
                  })
                  .replace(":", "시")}
              </p>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};
