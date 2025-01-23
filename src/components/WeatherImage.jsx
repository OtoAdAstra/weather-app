export default function WeatherImage({ sky }) {
  const weatherImages = {
    "clear sky": "clear-sky.png",
    "few clouds": "few-clouds.png",
    "scattered clouds": "scattered-clouds.png",
    "broken clouds": "broken-clouds.png",
    "shower rain": "shower-rain.png",
    rain: "rain.png",
    thunderstorm: "thunderstorm.png",
    snow: "snow.png",
    mist: "mist.png",
  };

  return (
    <img
      src={`/images/${weatherImages[sky]}`}
      alt={sky}
      className="weather-image"
    />
  );
}
