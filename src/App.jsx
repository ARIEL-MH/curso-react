import "./App.css";
import Events from "./components/Events";
import Navbar from "./components/Navbar";
import { useState } from "react";
import SingupForm from "./components/SignupForm";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  function handleNavbarSearch(term) {
    setSearchTerm(term);
  }

  return (
    <>
      {/* <Navbar onSearch={handleNavbarSearch} />
      <Events searchTerm={searchTerm} /> */}
      <SingupForm />
    </>
  );
}

export default App;
