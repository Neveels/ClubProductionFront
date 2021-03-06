import React from "react";
import cl from "./SuccessfulPage.module.css";
import { useNavigate } from "react-router-dom";

const SuccessfulPage = ({ setIsSuccess }) => {
  const navigate = useNavigate();

  return (
    <div className={cl.wrap}>
      <img className={cl.avatarImg} src="/img/user.png" alt="" />
      <div className={cl.txtWrap}>
        <h3>User registered successfully!</h3>
      </div>
      <button
        className={cl.okBtn}
        onClick={() => {
          setIsSuccess(false);
          navigate("/auth");
        }}
      >
        <h3>OK</h3>
      </button>
    </div>
  );
};

export default SuccessfulPage;
