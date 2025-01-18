import axios from "axios";
import { createContext, useContext, useState } from "react";

const ApiContext = createContext();

// eslint-disable-next-line react/prop-types
export default function Api({ children, value }) {
  //state variables
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //API key and URL
  let apiKey = import.meta.env.VITE_API_KEY;
  let city = value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?`;

  //fetch data from the API
  const fetchData = async () => {
    try {
      setLoading(true);
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
    } finally {
      setLoading(false);
    }
  };

  console.log(data);

  return (
    <ApiContext.Provider value={{ data, loading, error, fetchData }}>
      {children}
    </ApiContext.Provider>
  );
}

export function useApi() {
  return useContext(ApiContext);
}
