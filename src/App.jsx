import { useState } from "react";
import Navbar from "./components/Navbar";
import Api from "./contexts/ApiContext.jsx";

function App() {
  const [inputValue, setInputValue] = useState("");
  return (
    <>
      <Api value={inputValue}>
        <Navbar value={inputValue} setValue={setInputValue} />
      </Api>
    </>
  );
}

export default App;
