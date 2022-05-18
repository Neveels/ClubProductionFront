import { Route, Routes, Link } from "react-router-dom";
import cl from "./Registration.module.css";
import React, { useState } from "react";
import AuthService from "../../service/auth.service";
import axios from "axios";
import SuccessfulPage from "../SuccessfulPage/SuccessfulPage";

const Registration = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [eyeOpenReg, setEyeOpenReg] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false)

  // const postCustomerData = (e) => {
  //   e.preventDefault();
  //   const newCustomer = {
  //     username: name,
  //     // surName: surName,
  //     phone: phone,
  //     email: email,
  //     password: password,
  //   };
  // };

  const postCustomerData = (e) => {
    e.preventDefault();

    const newCustomer = {
      username: name,
      // surName: surName,
      phoneNumber: phone,
      email: email,
      password: password,
    };

    AuthService.register(newCustomer)
      .then((response) => {
        setIsSuccess(true)
        setErrorMessage("")
      },
      (error) => {
        setErrorMessage(error.response.data.message)
      }
    );
  };

  return (
    <div className={cl.wrap}>
      {isSuccess
        ? <SuccessfulPage
            setIsSuccess={setIsSuccess}
          />
        :
        <>
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
            {errorMessage &&
              <div className={cl.errorMessage}>
                <h3>{errorMessage}</h3>
              </div>
            }


          </form>
        </>
      }
    </div>
  );
};

export default Registration;
