import React, { Component, useState } from "react";
import cl from "./Slider.module.css";

const Slider = () => {
  const [idx, setIdx] = useState(0);

  const imgArr = [
    "../../../img/Dinamo.jpg",
    "../../img/Dinamo2.jpg",
    "../../img/Dinamo3.jpg",
  ];

  return (
    <div className={cl.wrap}>
      <img
        className={`${cl.arrow} ${cl.leftArrow}`}
        src="../../../img/arrow.png"
        onClick={() => setIdx(idx === 0 ? idx : idx - 1)}
      />

      <img src={imgArr[idx]} className={cl.img} />
      <img
        className={cl.arrow}
        src="../../../img/arrow.png"
        onClick={() => setIdx(idx === imgArr.length - 1 ? idx : idx + 1)}
      />
    </div>
  );
};

export default Slider;
