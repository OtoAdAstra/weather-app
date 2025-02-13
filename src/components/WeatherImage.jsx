// eslint-disable-next-line react/prop-types
export default function WeatherImage({ sky }) {
  const weatherImages = {
    "clear sky": "clear-sky.webp",
  };

  return (
    <img src={`/images/${weatherImages[sky]}`} className="weather-image" />
  );
}
