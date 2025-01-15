import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";

const ApiContext = createContext();

// eslint-disable-next-line react/prop-types
export default function Api({ children, value }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [submit, setSubmit] = useState(false);

  let apiKey = import.meta.env.VITE_API_KEY;
  let city = value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  const submitHandler = () => {
    setSubmit((prev) => !prev);
  };

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [submit]);

  console.log(data);
  console.log(error);

  return (
    <ApiContext.Provider value={{ data, loading, error, submitHandler }}>
      {children}
    </ApiContext.Provider>
  );
}

export function useApi() {
  return useContext(ApiContext);
}
