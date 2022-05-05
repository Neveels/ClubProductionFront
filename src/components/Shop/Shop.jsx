import React, { Component, useState } from "react";
import Card from "../Card/Card";
import cl from "./Shop.module.css";
import ProductService from "../../sirvices/ProductService";
import axios from "axios";

const Shop = () => {
  // class ProductComponent extends React.Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       users: [],
  //     };
  //   }

  //   componentDidMount() {
  //     ProductService.getProducts().then((response) => {
  //       this.setState({ products: response.data });
  //     });
  //   }
  //   render() {
  //     return <div></div>;
  //   }

  // }

  //Backend request
  // React.useEffect(() => {
  //   fetch("https://626d99c0034ec185d334e1b6.mockapi.io/items")
  //     // axios.get("http://localhost:8080/create/products")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((json) => {
  //       setItems(json);
  //     });
  // }, []); //Вызывает это функцию только при первом Rendere App js
  const [items, setItems] = React.useState([]);
  React.useEffect(() => {
    const apiUrl = "http://localhost:8080/create/products";
    axios.get(apiUrl).then((resp) => {
      const allProducts = resp.data;
      console.log(allProducts);
      setItems(allProducts);
    });
  }, [setItems]); //Вызывает это функцию только при первом Rendere App js
  console.log(items);
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
          <li>
            <a href="#anchor">Новинки</a>
          </li>
          <li>
            <a href="#popular">Популярное</a>
          </li>
          <li>Спецпредложение</li>
        </ul>
      </div>
      <div className={cl.banner}>
        <img src="/img/banner.jpg" alt="banner" />
      </div>
      <div className={cl.mainText}>
        <h3>Новинки сезона</h3>
        {/* <div className="search-block">
          <img width={15} height={15} src="/img/search.png" alt="Search" />
          <input placeholder="Поиск..." />
        </div> */}
      </div>

      <section className="shop d-flex ">
        {/* flex-wrap */}
        {items.map((item) => (
          <Card
            title={item.name}
            price={item.price}
            imageUrl={item.imageUrl}
            onPlus={(obj) => onAddToCart(obj)}
            onFavorite={() => console.log("Добавить в закладки")}
          />
        ))}
      </section>
      <div className={cl.mainText}>
        <h3 id="popular">Популярное</h3>
        {/* <div className="search-block">
          <img width={15} height={15} src="/img/search.png" alt="Search" />
          <input placeholder="Поиск..." />
        </div> */}
      </div>

      <section className="shop d-flex mb-40">
        {items.map((item) => (
          <Card
            title={item.name}
            price={item.price}
            imageUrl={item.imageUrl}
            onPlus={(obj) => onAddToCart(obj)}
            onFavorite={() => console.log("Добавить в закладки")}
          />
        ))}
      </section>
    </div>
  );
};

export default Shop;
