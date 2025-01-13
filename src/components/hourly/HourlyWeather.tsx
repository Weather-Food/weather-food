import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HourlyWeather.scss";

interface WeatherData {
  time: string; // 시간
  temperature: number; // 온도
  weather: string; // 날씨
  windSpeed: number; // 풍량
  humidity: number; // 습도
}

interface HourlyWeatherProps {
  weatherData: WeatherData[];
  getWeatherImage: (weather: string) => string;
}

export const HourlyWeather: React.FC<HourlyWeatherProps> = ({
  weatherData,
  getWeatherImage,
}) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {weatherData.map((data, index) => (
        <div key={index} className="hourly-card">
          <div className="hourly-info">
            <img
              src={getWeatherImage(data.weather)}
              alt={data.weather}
              className="weather-image"
            />
            <p className="temperature">{data.temperature}°C</p>
            <p className="weather">{data.weather}</p>
            <p className="time">
              {new Date(data.time).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </div>
        </div>
      ))}
    </Slider>
  );
};
