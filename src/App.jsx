import "./App.css";
import Events from "./components/Events";
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
//* este es nuestro componente principal
function App() {
  const [searchTerm, setSearchTerm] = useState("");
  /*Teoria de useEffect  Se manda a llamar dentro de su callback cuanto ciertas funciones o parametros cambian  resive 2 agr funcion flecha arreglo de dependecias se llama dev dependencias es el argumento mas importante para que es utilizado uE para ejecutar ciertos cambios cuandos ciertos argumentos cambien */

  /*useEffect(
    //cuando se monte mi componente este a su ves se va ejecutar y cuando searchTerm cambien tambien se va llamar
    () => {
      console.log("useEfect");
    },
    [searchTerm]
  );*/

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
