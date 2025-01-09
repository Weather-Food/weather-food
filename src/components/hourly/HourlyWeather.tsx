import React from "react";

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
  return (
    <>
      {weatherData.map((data, index) => (
        <div key={index} className="hourly-card">
          <img
            src={getWeatherImage(data.weather)}
            alt={data.weather}
            className="weather-image"
          />
          <div className="hourly-info">
            <p>
              {new Date(data.time).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
            <p>{data.temperature}°C</p>
            <p>{data.weather}</p>
          </div>
        </div>
      ))}
    </>
  );
};
