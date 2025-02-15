import { useApi } from "../contexts/ApiContext";

// eslint-disable-next-line react/prop-types
export default function WeatherImage({ sky }) {
  const { isDay } = useApi();

  const weatherImages = {
    Clear: isDay() ? "sunny.webp" : "clear-night.webp",
    Thunderstorm: "thunderstorm.webp",
    Drizzle: "drizzle.webp",
    Rain: "rain.webp",
    Snow: "snow.webp",
    Clouds: isDay() ? "cloudy.webp" : "clear-night.webp",
    Atmosphere: "smoke.webp",
  };

  return (
    <img
      src={`/images/${weatherImages[sky]}`}
      className="weather-image"
      alt={sky}
    />
  );
}
