import { useForm } from "react-hook-form";
import styles from "./MyInfo.module.css";
import { useEffect } from "react";
const USER_DATA = "userData";

const MyInfo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  useEffect(() => {
    try {
      const userData = JSON.parse(localStorage.getItem(USER_DATA)) || [];
      setValue("name", userData?.name);
      setValue("age", userData?.age);
      setValue("email", userData?.email);
    } catch (e) {
      console.error(e);
    }
  }, []);

  const handleFormSubmit = (data) => {
    try {
      localStorage.setItem(USER_DATA, JSON.stringify(data));
      alert('"Usuario actualizado');
    } catch (e) {
      alert("Ha ocurrido un erro");
    }
  };
  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className={styles.form}>
      <label className={styles.label}>
        Name
        <input
          {...register("name", {
            required: true,
            minLength: 1,
            maxLength: 120,
          })}
        />
      </label>
      <label className={styles.label}>
        Email
        <input {...register("email", { required: true })} />
      </label>
      <label className={styles.label}>
        Age
        <input
          {...register("age", {
            required: true,
            min: 1,
            max: 120,
            valueAsNumbe: true,
          })}
          type="number"
        />
      </label>
      <button className={styles.btn}>Save</button>
    </form>
  );
};
export default MyInfo;
