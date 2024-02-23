import { useState, useEffect } from "react";

function Navbar({ onSearch }) {
  const [search, setSearch] = useState("");

  /*
  puedes tener n cantidad de hooks
  useEffect(
    () => {
      console.log("1010 effect");
    }, //
    [search, onSearch] //ojo cuando se produsca una actualizacion del hijo al padre
  );
  
  useEffect(
    () => {
      console.log("onSearch cambio");
    }, //
    [onSearch] //ojo cuando se produsca una actualizacion del hijo al padre
  ); 

  useEffect(
    () => {
      console.log("Componente listo");
    }, //
    []
  );

  useEffect(
    () => {
      console.log("serach cambio");
    }, //
    [search]
  );
 */

  function handleInputChange(evt) {
    setSearch(evt.target.value);
    //acceder a lo que es usuario esta escribiendo con evt.target.value
  }

  function handleInputKeyDown(evt) {
    /*console.log(evt) */
    //Ver las propiedades y puedes ver que esta precionando el usuario
    if (evt.key === "Enter") {
      onSearch(search); //Ejecutamos la busqueda
    }
  }

  return (
    <div>
      <p>Mi boletera</p>
      <input
        type="text"
        placeholder="Busca tu evento favorito"
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        /*Lo que hicimos fue detectar si la tecla es enter entonces vamos a ejecutar una busqueda*/
        value={search}
      />
    </div>
  );
}

export default Navbar;
