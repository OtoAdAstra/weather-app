import { useApi } from "../contexts/ApiContext";

export default function Home() {
  const { cityWeather } = useApi();
  return (
    <div className="weather">
      <div>
        <span>
          {cityWeather.city}, {cityWeather.country}
        </span>
      </div>
      <div className="weather-data">
        {/* <img src={} alt="" /> */}
        <span>{(cityWeather.temp - 273.15).toFixed()}</span>
      </div>
    </div>
  );
}
