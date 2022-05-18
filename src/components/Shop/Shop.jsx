import React, { useState } from "react";
import Card from "../Card/Card";
import cl from "./Shop.module.css";
import axios from "axios";

const Shop = () => {
  //Backend request
  const [items, setItems] = React.useState([]);
  React.useEffect(() => {
    const PRODUCT_REST_API_URL = "http://localhost:8086/api/test/all";
    axios.get(PRODUCT_REST_API_URL).then((resp) => {
      const allProducts = resp.data;
      console.log(allProducts);
      setItems(allProducts);
    });
  }, [setItems]); //Вызывает это функцию только при первом Rendere App js
  // console.log(items);
  //Работает только с одинарными ковычками
  //Отправили запрос на получение массива
  //Массив принят
  const [cartItems, setCartItems] = React.useState([]);
  //Этот массив лишний нужно переопределить
  const onAddToCart = (obj) => {
    setCartItems([...cartItems, obj]);
  };
  // console.log(cartItems);

  return (
    <div className={cl.wrap}>
      <div className={cl.shopNav}>
        <ul>
          <a href="#new">
            <li>Новинки</li>
          </a>
          <a href="#popular">
            <li>Популярное</li>
          </a>
          <a href="#special">
            <li>Спецпредложение</li>
          </a>
        </ul>
      </div>
      <div className={cl.banner}>
        <img src="/img/banner.jpg" alt="banner" />
      </div>
      <div className={cl.mainText}>
        <h3 id="new">Новинки сезона</h3>
        {/* <div className="search-block">
          <img width={15} height={15} src="/img/search.png" alt="Search" />
          <input placeholder="Поиск..." />
        </div> */}
      </div>

      <section className="shop d-flex ">
        {items.map((item) => (
          <Card
            title={item.title}
            price={item.price}
            imageUrl={item.url}
            onPlus={(obj) => onAddToCart(obj)}
            onFavorite={() => console.log("Добавить в закладки")}
          />
        ))}
      </section>
      <div className={cl.mainText}>
        <h3 id="popular">Популярное</h3>
      </div>

      <section className="shop d-flex mb-40">
        {items.map((item) => (
          <Card
            title={item.title}
            price={item.price}
            imageUrl={item.url}
            onPlus={(obj) => onAddToCart(obj)}
            onFavorite={() => console.log("Добавить в закладки")}
          />
        ))}
      </section>
      <div className={cl.mainText}>
        <h3 id="special">Спецпредложение</h3>
      </div>

      <section className="shop d-flex mb-40">
        {items.map((item) => (
          <Card
            title={item.title}
            price={item.price}
            imageUrl={item.url}
            onPlus={(obj) => onAddToCart(obj)}
            onFavorite={() => console.log("Добавить в закладки")}
          />
        ))}
      </section>
    </div>
  );
};

export default Shop;
