import React, { useState, Link } from "react";
import cl from "./Player.module.css";

const Player = ({ country, age, image, name, number, id }) => {
  console.log(id);
  return (
    <Link to={`/team/1`}>
      <div className={cl.wrap}>
        <img width={170} height={170} src={image} alt="Player" />

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
    </Link>
  );
};

export default Player;
