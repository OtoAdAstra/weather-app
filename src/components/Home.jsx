// eslint-disable-next-line react/prop-types
export default function Home({ city, img, temp }) {
  return (
    <div>
      <div>
        <h1>{city}</h1>
      </div>
      <div>
        <img src={img} alt="" />
        <span>{temp}</span>
      </div>
    </div>
  );
}
