import { IoSearchCircleSharp } from "react-icons/io5";
import { useApi } from "../contexts/ApiContext";

// eslint-disable-next-line react/prop-types
export default function Navbar({ value, setValue }) {
  const { submitHandler } = useApi();
  return (
    <>
      <ul className="navbar">
        <li className="navbar-title">Weather.</li>
        <li>
          <div className="navbar-search">
            <input
              type="text"
              placeholder="Enter city..."
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <div className="searcg-icon-div">
              <IoSearchCircleSharp
                className="search-icon"
                onClick={submitHandler}
              />
            </div>
          </div>
        </li>
      </ul>
    </>
  );
}
