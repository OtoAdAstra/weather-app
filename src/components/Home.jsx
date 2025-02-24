import { useApi } from "../contexts/ApiContext";
import WeatherImage from "./WeatherImage";
import { motion } from "motion/react";

export default function Home() {
  const { cityWeather } = useApi();
  return (
    <section className="weather">
      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
        <span className="weather-city">{cityWeather.city}</span>
      </motion.div>
      <div className="weather-data">
        <WeatherImage sky={cityWeather.sky} />
        <span className="weather-data-degree">
          {(cityWeather.temp - 273.15).toFixed()} °C
        </span>
      </div>
    </section>
  );
}
