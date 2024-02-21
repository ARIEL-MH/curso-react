import { useState } from "react";

function Navbar({ onSearch }) {
  const [search, setSearch] = useState("");

  function handleInputChange(evt) {
    setSearch(evt.target.value);
    //acceder a lo que es usuario esta escribiendo con evt.target.value
  }

  function handleInputKeyDown(evt) {
    if (evt.key === "Enter") {
      onSearch(search);
    }
  }
  //

  return (
    <div>
      <p>Mi boletera</p>
      <input
        type="text"
        placeholder="Busca tu evento favorito"
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        value={search}
      />
    </div>
  );
}
export default Navbar;
