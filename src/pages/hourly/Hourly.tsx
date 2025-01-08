import React, { useEffect, useState } from "react";
import "./Hourly.scss";

// API 응답 타입 정의
interface WeatherData {
  time: string; // 시간대 정보 (e.g., "2024-12-30 10:00:00")
  temperature: number; // 온도 정보
  weather: string; // 날씨 상태 (e.g., "Clear", "Rainy", "Cloudy")
}

// 목 데이터
const mockWeatherData: WeatherData[] = [
  { time: "2025-01-07T09:00:00", temperature: 5, weather: "Clear" },
  { time: "2025-01-07T12:00:00", temperature: 7, weather: "Clouds" },
  { time: "2025-01-07T15:00:00", temperature: 6, weather: "Rain" },
  { time: "2025-01-07T18:00:00", temperature: 4, weather: "Clear" },
  { time: "2025-01-07T21:00:00", temperature: 2, weather: "Clouds" },
];

const Hourly: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // 목 데이터를 가져오는 로직 추가
  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        // 실제 API 호출이 아니라 목 데이터를 사용
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

  // 날씨 상태에 따라 이미지 경로 반환
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

  return (
    <div className="hourly-container">
      <h2>Hourly Weather Forecast</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        <div className="hourly-grid">
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
        </div>
      )}
    </div>
  );
};

export default Hourly;
