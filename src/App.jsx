import "./App.css";
import Events from "./components/Events";
import Navbar from "./components/Navbar";
import { useState, useRef } from "react";
//* este es nuestro componente principal
function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const containerRef = useRef();

  function handleNavbarSearch(term) {
    console.log(containerRef.current);
    setSearchTerm(term);
  }

  return (
    <>
      <Navbar onSearch={handleNavbarSearch} ref={containerRef} />
      <Events searchTerm={searchTerm} />
    </>
  );
}

export default App;
