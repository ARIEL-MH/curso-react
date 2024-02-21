import { useState } from "react";

function Navbar() {
  const [search, setSearch] = useState("");

  function handleInputChange(evt) {
    setSearch(evt.target.value);
    //acceder a lo que es usuario esta escribiendo con evt.target.value
  }

  return (
    <div>
      <p>Mi boletera</p>
      <input
        type="text"
        placeholder="Busca tu evento favorito"
        onChange={handleInputChange}
        value={search}
      />
    </div>
  );
}
export default Navbar;
