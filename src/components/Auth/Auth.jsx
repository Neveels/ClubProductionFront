import { Link, useNavigate } from "react-router-dom";
import cl from "../RegistrationPage/Registration.module.css";
import React, { useState } from "react";
import AuthService from "../../service/auth.service";

const Auth = () => {
  const [username, setUsename] = useState("");
  const [password, setPassword] = useState("");
  const [eyeOpenReg, setEyeOpenReg] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigator = useNavigate();

  const postCustomerData = (e) => {
    e.preventDefault();

    const Customer = {
      username: username,
      password: password,
    };

    AuthService.login(Customer).then(
      (res) => {
        localStorage.setItem("user", JSON.stringify(res));
        localStorage.setItem("auth", JSON.stringify(true));
        navigator("/");
        window.location.reload();
      },
      (error) => {
        setErrorMessage("Invalid email or password :(");
      }
    );
  };

  return (
    <div className={cl.wrap}>
      <div className={cl.mainButtons}>
        <Link to="/registration">
          <button type="submit" className={cl.regButton}>
            <p>Регистрация</p>
          </button>
        </Link>
        <button type="submit" className={cl.regButton}>
          <p>Вход</p>
        </button>
      </div>
      <form onSubmit={postCustomerData}>
        <div className={cl.inputWrap}>
          <h3>Имя</h3>
          <input
            required
            type="username"
            value={username}
            onChange={(e) => setUsename(e.target.value)}
          />
        </div>
        <div className={cl.inputWrap}>
          <h3>Пароль</h3>
          <input
            required
            minLength={6}
            type={eyeOpenReg ? "text" : "password"}
            className={cl.passwordInput}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className={cl.authorizationButton}>
          <p>Вход</p>
        </button>
        {errorMessage && (
          <div className={cl.errorMessage}>
            <h3>{errorMessage}</h3>
          </div>
        )}
      </form>
    </div>
  );
};

export default Auth;
