import "./styles.css";
import { useForm } from "react-hook-form";

const SingupForm = () => {
  // hooks llamados en la parte superior de los componentes

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  function handleClearClick() {
    reset();
  }

  function handleSubmitForm(data) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)} className="form">
      <label>
        Name
        <input {...register("name", { required: true })} />
      </label>
      <br />
      <label>
        Age
        <input type="number" {...register("name", { required: true })} />
      </label>
      <br />
      <label>
        Address
        <input {...register("address", { required: true })} />
      </label>
      <br />
      <label>
        Zipcode
        <input {...register("zipcode", { required: true })} />
      </label>
      <br />
      <label>
        Phone
        <input {...register("phone", { required: true })} />
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
