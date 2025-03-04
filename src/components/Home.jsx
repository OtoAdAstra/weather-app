import { useState } from "react";
import { useApi } from "../contexts/ApiContext";
import WeatherImage from "./WeatherImage";
import { motion } from "motion/react";

export default function Home() {
  const { cityWeather } = useApi();
  const [details, setDetails] = useState(false);

  console.log(details);

  return (
    <section className="weather">
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: !details ? 1 : 0 }}>
        <span className="weather-city" onClick={() => setDetails(true)}>
          {cityWeather.city}
        </span>
      </motion.div>

      <motion.div
        className="weather-data"
        transition={{ duration: 0.5 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: !details ? 1 : 0 }}>
        <WeatherImage sky={cityWeather.sky} />
        <span className="weather-data-degree">
          {(cityWeather.temp - 273.15).toFixed()} °C
        </span>
      </motion.div>
    </section>
  );
}
