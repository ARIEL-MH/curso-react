import { useState } from "react";
import "./styles.css";

const SingupForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [phone, setPhone] = useState("");
  <br />;

  function handleClearClick() {
    setName("");
    setAge("");
    setAddress("");
    setZipcode("");
    setPhone("");
  }

  function handleSubmitForm(evt) {
    //aqui paso algo raro se actualizo la web y eso es un error
    evt.preventDefault(); //solucion
    console.log("Submit", {
      name,
      age,
      address,
      phone,
      zipcode,
    });
  }

  return (
    <form onSubmit={handleSubmitForm} className="form">
      <label>
        Name
        <input
          value={name}
          onChange={
            //
            (evt) => setName(evt.target.value)
          }
          required
        />
      </label>
      <br />
      <label>
        Age
        <input
          value={age}
          onChange={
            //
            (evt) => setAge(evt.target.value)
          }
          required
        />
      </label>
      <br />
      <label>
        Address
        <input
          value={address}
          onChange={
            //
            (evt) => setAddress(evt.target.value)
          }
          required
        />
      </label>
      <br />
      <label>
        Zipcode
        <input
          value={zipcode}
          onChange={
            //
            (evt) => setZipcode(evt.target.value)
          }
          required
        />
      </label>
      <br />
      <label>
        Phone
        <input
          value={phone}
          onChange={
            //
            (evt) => setPhone(evt.target.value)
          }
          required
        />
      </label>
      <div>
        <button type="button" onClick={handleClearClick}>
          Clear
        </button>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};
export default SingupForm;
//6.53
