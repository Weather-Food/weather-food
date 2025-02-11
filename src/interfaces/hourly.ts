export interface WeatherData {
  time: string; // 시간
  temperature: number; // 온도
  weather: string; // 날씨
  windSpeed: number; // 풍량
  humidity: number; // 습도
}

export interface CurrentWeatherProps {
  currentWeather: WeatherData;
  getWeatherImage: (weather: string) => string;
}

export interface HourlyWeatherProps {
  weatherData: WeatherData[];
  getWeatherImage: (weather: string) => string;
}
