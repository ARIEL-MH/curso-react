import { useState, forwardRef, useImperativeHandle } from "react";

const Navbar = forwardRef(({ onSearch }, ref) => {
  const [search, setSearch] = useState("");

  useImperativeHandle(ref, () => ({ search, setSearch }));

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
    <div ref={ref}>
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
});

Navbar.displayName = "Navbar";

export default Navbar;
