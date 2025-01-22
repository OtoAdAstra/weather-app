import { useState } from "react";
import Navbar from "./components/Navbar";
import Api from "./contexts/ApiContext.jsx";
import Home from "./components/Home.jsx";

function App() {
  const [inputValue, setInputValue] = useState("");
  return (
    <>
      <Api value={inputValue}>
        <Navbar value={inputValue} setValue={setInputValue} />
        <Home />
      </Api>
    </>
  );
}

export default App;
