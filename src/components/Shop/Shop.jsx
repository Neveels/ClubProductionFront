import React, { useState } from "react";
import Card from "../Card/Card";
import cl from "./Shop.module.css";
import ProductService from "../../service/product.service";
import Drawer from "../Drawer";

const Shop = ({ onAddToCart }) => {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [user, setUser] = useState({});

  React.useEffect(() => {
    ProductService.getProducts().then((resp) => {
      setItems(resp.data);
    });
  }, [setItems]);

  React.useEffect(() => {
    localStorage.getItem("user") &&
      setUser(JSON.parse(localStorage.getItem("user") || ""));
  }, []);

  //Этот массив лишний нужно переопределить
  // const onAddToCart = (obj) => {
  //   setCartItems([...cartItems, obj]);
  // };

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
      </div>
      <section className="shop d-flex flex-wrap">
        {items.map((item) => (
          <Card
            onClick={() =>
              user.roles == "ROLE_ADMIN" && ProductService.deleteById(item.id)
            }
            obj={item}
            onAddToCart={onAddToCart}
          />
        ))}
      </section>
      <div className={cl.mainText}>
        <h3 id="popular">Популярное</h3>
      </div>

      {/* <section className="shop d-flex mb-40 flex-wrap">
        {items.map((item) => (
          <Card
            title={item.title}
            price={item.price}
            imageUrl={item.url}
            onPlus={(item) => onAddToCart(item)}
          />
        ))}
      </section> */}
      <div className={cl.mainText}>
        <h3 id="special">Спецпредложение</h3>
      </div>

      {/* <section className="shop d-flex mb-40 flex-wrap">
        {items.map((item) => (
          <Card
            title={item.title}
            price={item.price}
            imageUrl={item.url}
            onFavorite={() => console.log("Добавить в закладки")}
            onPlus={(obj) => onAddToCart(obj)}
          />
        ))}
      </section> */}
    </div>
  );
};

export default Shop;
