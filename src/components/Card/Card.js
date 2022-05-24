import styles from "./Card.module.scss";
import React from "react";
import ProductService from "../../service/product.service";

function Card({ obj, onAddToCart }) {
  const [isAdded, setIsAdded] = React.useState(false);

  // Следит за изменением какого-то события
  React.useEffect(() => {
    console.log("Переменная изменилась");
  }, [isAdded]); //Меняющееся событие

  return (
    <div className={styles.card}>
      <img width={200} height={280} src={obj.imageUrl} alt="" />
      <h5>{obj.title} </h5>
      <div className="d-flex justify-between align-center ">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{obj.price} р.</b>
        </div>
        <img
          className={styles.plus}
          onClick={() => {
            setIsAdded(!isAdded);
            onAddToCart(obj);
          }}
          width={30}
          height={30}
          src={isAdded ? "/img/btn-cheked.png" : "/img/btn-plus.png"}
          alt=""
        />
      </div>
    </div>
  );
}

export default Card;
