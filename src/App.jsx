import "./App.css";
import Events from "./components/Events";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  // useEffect(
  //   () => {
  //     console.log("useEfect");
  //   }, //
  //   [searchTerm]
  // );

  function handleNavbarSearch(term) {
    setSearchTerm(term);
  }

  return (
    <>
      <Navbar onSearch={handleNavbarSearch} />
      <Events searchTerm={searchTerm} />
    </>
  );
}

export default App;
