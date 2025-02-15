import { useApi } from "../contexts/ApiContext";
import WeatherImage from "./WeatherImage";

export default function Home() {
  const { cityWeather } = useApi();
  return (
    <section className="weather">
      <div>
        <span className="weather-city">
          {cityWeather.city}, {cityWeather.country}
        </span>
      </div>
      <div className="weather-data">
        <WeatherImage sky={cityWeather.sky} />
        <span>{(cityWeather.temp - 273.15).toFixed()} °C</span>
      </div>
    </section>
  );
}
