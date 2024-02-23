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
    <div
      ref={ref}
      style={
        //
        { marginBottom: "14px", width: "100%", display: "flex" }
      }
    >
      <div
        style={
          //
          { flex: 1, display: "flex" }
        }
      >
        <p style={{ fontSize: 24, fontWeight: "bold" }}>Mi boletera</p>
      </div>
      <div
        style={
          //
          {
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }
        }
      >
        <input
          type="text"
          placeholder="Busca tu evento favorito"
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          /*Lo que hicimos fue detectar si la tecla es enter entonces vamos a ejecutar una busqueda*/
          value={search}
          style={{
            fontSize: "16px",
            padding: "6px 12px",
            border: "none",
            borderRadius: "4px",
            width: 200,
          }}
        />
      </div>
    </div>
  );
});

Navbar.displayName = "Navbar";

export default Navbar;
