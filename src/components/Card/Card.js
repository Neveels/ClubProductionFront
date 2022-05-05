import styles from "./Card.module.scss";
import React from "react";

function Card({ onFavorite, imageUrl, title, price, onPlus }) {
  // const onClickButton = () => {
  //   alert(props.title);
  // };
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
    onPlus({ title, imageUrl, price });

    setIsAdded(!isAdded);
  };

  // Следит за изменением какого-то события
  React.useEffect(() => {
    console.log("Переменная изменилась");
  }, [isAdded]); //Меняющееся событие

  return (
    <div className={styles.card}>
      <div
        className={styles.favorite}
        onClick={
          // () => onClickButton
          onFavorite
        }
      ></div>
      <img width={200} height={280} src={imageUrl} alt="Perchatki" />
      <h5>{title} </h5>
      <div className="d-flex justify-between align-center ">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} р.</b>
        </div>
        {/* <button
          className={styles.button}
          onClick={props.onPlus}
        > */}
        <img
          className={styles.plus}
          onClick={onClickPlus}
          width={30}
          height={30}
          src={isAdded ? "/img/btn-cheked.png" : "/img/btn-plus.png"}
          alt=""
        />
        {/* </button> */}
      </div>
    </div>
  );
}

export default Card;
