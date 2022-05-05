import { Route, Routes, Link } from "react-router-dom";
import cl from "./Registration.module.css";
import React, { useState } from "react";
import axios from "axios";

const Registration = () => {
  const [name, setName] = useState("");
  const [surName, setSurName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [eyeOpenReg, setEyeOpenReg] = useState(false);

  const postCustomerData = (e) => {
    e.preventDefault();
    const newCustomer = {
      name: name,
      surName: surName,
      phone: phone,
      email: email,
      password: password,
    };
    axios.post("http://localhost:8082/registration", newCustomer);
    console.log(newCustomer);
  };

  return (
    <div className={cl.wrap}>
      <div className={cl.mainButtons}>
        <button type="submit" className={cl.regButton}>
          <p>Регистрация</p>
        </button>
        <Link to="/auth">
          <button type="submit" className={cl.regButton}>
            <p>Вход</p>
          </button>
        </Link>
      </div>
      <form onSubmit={postCustomerData}>
        <div className={cl.inputWrap}>
          <h3>Имя</h3>
          <input
            required
            value={name}
            // onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => e.key.replace(/[^A-Za-z\s]/g,'') && !(e.ctrlKey && e.keyCode === 86) || e.preventDefault()}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={cl.inputWrap}>
          <h3>Фамилия</h3>
          <input
            required
            value={surName}
            // onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => e.key.replace(/[^A-Za-z\s]/g,'') && !(e.ctrlKey && e.keyCode === 86) || e.preventDefault()}
            onChange={(e) => setSurName(e.target.value)}
          />
        </div>
        <div className={cl.inputWrap}>
          <h3>Номер телефона</h3>
          {/* <h2 className={cl.phonePlus}>+</h2> */}
          <input
            required
            minLength={10}
            maxLength={18}
            className={cl.phoneInput}
            value={phone}
            onKeyDown={(e) =>
              e.key.replace(/[^[0-9]/g, "") ||
              [8, 37, 38, 39, 40, 46].includes(e.keyCode) ||
              (e.ctrlKey && e.keyCode === 65) ||
              e.preventDefault()
            }
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className={cl.inputWrap}>
          <h3>Электронная почта</h3>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        {/* <div className={cl.inputWrap}>
          <h3>Подтверждение пароля</h3>
          <input
            required
            minLength={6}
            type={eyeOpenReg ? "text" : "password"}
            className={cl.passwordInput}
            value={confirmPassword}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div> */}
        {/* <img
            className={cl.eyeImage}
            src={eyeOpenReg ? "./Images/OpenEye.jpg" : "./Images/CloseEye.jpg"}
            onClick={() =>
              eyeOpenReg ? setEyeOpenReg(false) : setEyeOpenReg(true)
            }
          /> */}

        <button type="submit" className={cl.authorizationButton}>
          <p>Регистрация</p>
        </button>
      </form>
    </div>
  );
};

export default Registration;
