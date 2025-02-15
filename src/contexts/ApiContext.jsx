import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";

const ApiContext = createContext();

// eslint-disable-next-line react/prop-types
export default function Api({ children, value }) {
  //state variables
  const [data, setData] = useState(null);
  const [defaultCity, setDefaultCity] = useState(null);
  const [error, setError] = useState(null);

  //API key and URL
  let apiKey = import.meta.env.VITE_API_KEY;
  let city = value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?`;

  //default city tbilisi
  useEffect(() => {
    axios
      .get(apiUrl, {
        headers: {
          Accept: "application/json",
        },
        params: {
          q: "Tbilisi",
          appid: apiKey,
        },
      })
      .then((response) => {
        setDefaultCity(response.data);
      });
  }, []);

  //fetch data from the API
  const fetchData = async () => {
    try {
      const response = await axios.get(apiUrl, {
        headers: {
          Accept: "application/json",
        },
        params: {
          q: city,
          appid: apiKey,
        },
      });
      setData(response.data);
    } catch (error) {
      setError(error.message);
    }
  };

  // Prepare temperature and other key data for export
  const cityWeather = {
    temp: data?.main?.temp || defaultCity?.main?.temp,
    sky: data?.weather?.[0]?.main || defaultCity?.weather?.[0]?.main,
    city: data?.name || defaultCity?.name,
    country: data?.sys?.country || defaultCity?.sys?.country,
    icon: data?.weather?.[0]?.icon || defaultCity?.weather?.[0]?.icon,
  };

  function isDay() {
    var str = cityWeather.icon;
    if (str) {
      const lastChar = str.charAt(str.length - 1);
      return lastChar === "d";
    }
    return false;
  }

  console.log(data);

  return (
    <ApiContext.Provider value={{ fetchData, error, cityWeather, isDay }}>
      {children}
    </ApiContext.Provider>
  );
}

export function useApi() {
  return useContext(ApiContext);
}
