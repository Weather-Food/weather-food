import React, { useEffect, useState } from "react";
import "./Hourly.scss";
import { CurrentWeather } from "../../components/hourly/CurrentWeather";
import { HourlyWeather } from "../../components/hourly/HourlyWeather";

interface WeatherData {
  time: string; // 시간
  temperature: number; // 온도
  weather: string; // 날씨
  windSpeed: number; // 풍량
  humidity: number; // 습도
}

// 목 데이터
const mockWeatherData: WeatherData[] = [
  {
    time: "2025-01-07T09:00:00",
    temperature: 5,
    weather: "Clear",
    windSpeed: 5,
    humidity: 65,
  },
  {
    time: "2025-01-07T12:00:00",
    temperature: 7,
    weather: "Clouds",
    windSpeed: 10,
    humidity: 70,
  },
  {
    time: "2025-01-07T15:00:00",
    temperature: 6,
    weather: "Rain",
    windSpeed: 15,
    humidity: 80,
  },
  {
    time: "2025-01-07T18:00:00",
    temperature: 4,
    weather: "Clear",
    windSpeed: 5,
    humidity: 60,
  },
  {
    time: "2025-01-07T21:00:00",
    temperature: 2,
    weather: "Clouds",
    windSpeed: 8,
    humidity: 75,
  },
];

const Hourly: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 1000)); // 로딩 효과 시뮬레이션
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
