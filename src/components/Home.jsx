import { useState } from "react";
import { useApi } from "../contexts/ApiContext";
import WeatherImage from "./WeatherImage";
import { AnimatePresence, motion } from "motion/react";
import { CgClose } from "react-icons/cg";

export default function Home() {
  const { cityWeather, cityDetails } = useApi();
  const [details, setDetails] = useState(false);

  function toggleDetails() {
    setDetails(!details);
  }

  return (
    <section className="weather">
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: !details ? 1 : 0 }}
        onClick={() => toggleDetails()}
        style={{ cursor: "pointer" }}>
        <span className="weather-city">{cityWeather.city}</span>
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
      <AnimatePresence>
        {details && (
          <motion.div
            className="weather-details"
            transition={{ duration: 0.1 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: details ? 1 : 0 }}
            exit={{ opacity: 0 }}>
            <CgClose
              className="weather-details-close"
              onClick={() => toggleDetails()}
            />
            <div className="weather-details-data">
              <p>
                Feels like:
                <span className="weather-details-data-span">
                  {(cityDetails.feelsLike - 273.15).toFixed()} °C
                </span>
              </p>
              <p>
                Humidity:
                <span className="weather-details-data-span">
                  {cityDetails.humidity} %
                </span>
              </p>
              <p>
                Pressure:
                <span className="weather-details-data-span">
                  {cityDetails.pressure} hPa
                </span>
              </p>
              <p>
                Wind speed:
                <span className="weather-details-data-span">
                  {cityDetails.windSpeed} m/s
                </span>
              </p>
              <p>
                Sea level:
                <span className="weather-details-data-span">
                  {cityDetails.seaLevel} m
                </span>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
