import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/Hourly/HourlyWeather.scss";
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
            className={`hourly-card ${isCurrentTime ? "current-time" : ""}`}
          >
            <div className="hourly-info">
              <img
                src={getWeatherImage(data.weather)}
                alt={data.weather}
                className="weather-image"
              />
              <p className="temperature">{data.temperature}°C</p>
              <p className="weather">{data.weather}</p>
              <p className="time">
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
