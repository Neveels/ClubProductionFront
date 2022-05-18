import { Route, Routes, Link } from "react-router-dom";
import cl from "../RegistrationPage/Registration.module.css";
import React, { useState } from "react";
import axios from "axios";
import AuthService from "../../service/auth.service";

const Auth = () => {
  const [username, setUsename] = useState("");
  const [password, setPassword] = useState("");
  const [eyeOpenReg, setEyeOpenReg] = useState(false);

  const postCustomerData = (e) => {
    e.preventDefault();
    const Customer = {
      username: username,
      password: password,
    };

    // this.setState({
    //   message: "",
    //   loading: true,
    // });

    // this.form.validateAll();
    AuthService.login(Customer).then(
      () => {
        this.props.history.push("/profile");
        window.location.reload();
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        this.setState({
          loading: false,
          message: resMessage,
        });
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
          <h3>Электронная почта</h3>
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
        {/* <img
            className={cl.eyeImage}
            src={eyeOpenReg ? "./Images/OpenEye.jpg" : "./Images/CloseEye.jpg"}
            onClick={() =>
              eyeOpenReg ? setEyeOpenReg(false) : setEyeOpenReg(true)
            }
          /> */}

        <button type="submit" className={cl.authorizationButton}>
          <p>Вход</p>
        </button>
      </form>
    </div>
  );
};

export default Auth;
