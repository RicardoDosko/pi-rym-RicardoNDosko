/* eslint-disable react/prop-types */
import { useState } from "react";
import { NavLink } from "react-router-dom";
import validation from "../../validations/validations.js";
import styles from "./Form.module.css";

export default function Form({ login }) {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
    setErrors(
      validation({ ...userData, [event.target.name]: event.target.value })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <div className={styles.conatinerForm}>
      <form onSubmit={handleSubmit}>
        <h1>LogIn</h1>
        <div>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="text"
            value={userData.email}
            placeholder="Insertar Email..."
            onChange={handleChange}
          />
          {errors.email && <p className={styles.msgError}>{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            value={userData.password}
            onChange={handleChange}
            placeholder="Insertar Password..."
          />
          {errors.password && (
            <p className={styles.msgError}>{errors.password}</p>
          )}
        </div>
        <div className={styles.containerButton}>
          <button>Submit</button>
          <NavLink to={"/signUp"}>
            <button>SignUp</button>
          </NavLink>
        </div>
      </form>
    </div>
  );
}