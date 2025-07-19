import { IoSearchOutline } from "react-icons/io5";
import { useApi } from "../contexts/ApiContext";

// eslint-disable-next-line react/prop-types
export default function Navbar({ value, setValue }) {
  const { fetchData } = useApi();

  return (
    <header>
      <ul className="navbar">
        <li className="navbar-title">Weather.</li>
        <li>
          <div className="navbar-search">
            <input
              type="text"
              placeholder="Search"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  fetchData();
                }
              }}
            />
            <div className="searcg-icon-div">
              <IoSearchOutline
                className="search-icon"
                onClick={fetchData}
                size={22}
              />
            </div>
          </div>
        </li>
      </ul>
    </header>
  );
}
