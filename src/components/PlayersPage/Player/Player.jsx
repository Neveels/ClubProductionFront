import React, { useState, Link } from "react";
import cl from "./Player.module.css";

const Player = ({ country, age, goal, assist, image, name, number, id }) => {
  return (
    <div className={cl.wrap}>
      {/* <Link to={`/team/${id}`}> */}
      <img width={170} height={170} src={image} alt="Player" />
      {/* </Link> */}
      <div className={cl.numberOfPlayer}>
        <h5 className="mt-10">{number}</h5>
      </div>
      <h5>{name}</h5>
      <div className="d-flex ">
        <div className={cl.ageAndCountry}>
          <p>
            {age} {country}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Player;
