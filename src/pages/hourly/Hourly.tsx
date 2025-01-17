import React, { useEffect, useState } from "react";
import "../../styles/Hourly/Hourly.scss";
import { CurrentWeather } from "../../components/hourly/CurrentWeather";
import { HourlyWeather } from "../../components/hourly/HourlyWeather";
import { WeatherData } from "../../components/hourly/interfaces";
import { mockWeatherData } from "./mockWeatherData";

const Hourly: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setWeatherData(mockWeatherData);
      } catch (err) {
        setError("Failed to load weather data.");
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, []);

  const getWeatherImage = (weather: string): string => {
    switch (weather.toLowerCase()) {
      case "clear":
        return "/svg/hourly/sun.svg";
      case "rain":
        return "/svg/hourly/rainfall.svg";
      case "clouds":
        return "/svg/hourly/cloudy.svg";
      default:
        return "/svg/hourly/sun.svg";
    }
  };

  // 현재 날씨 데이터
  const currentWeather = weatherData[0];

  return (
    <div className="hourly-container">
      <h2>Hourly Weather Forecast</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        <>
          {/* 현재 날씨 표시 */}
          <CurrentWeather
            getWeatherImage={getWeatherImage}
            currentWeather={currentWeather}
          />
          {/* 시간대별 날씨 표시 */}
          <div className="hourly-grid">
            <HourlyWeather
              getWeatherImage={getWeatherImage}
              weatherData={weatherData}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Hourly;
