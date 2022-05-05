import Slider from "../Slider/Slider";
import Card from "../Card/Card";
import React from "react";
import MainNan from "../MainNav/MainNan";

// const arr = [
//   {
//     name: "БРЮКИ ХК ДИНАМО-МИНСК",
//     price: 70,
//     imageUrl: "/img/1.png",
//   },
//   {
//     name: 'БОМБЕР ЧЕРНЫЙ ХК "ДИНАМО-МИНСК',
//     price: 120,
//     imageUrl: "/img/2.jpg",
//   },
//   {
//     name: "ФУТБОЛКА",
//     price: 25,
//     imageUrl: "/img/1.png",
//   },
//   {
//     name: "ФУТБОЛКА",
//     price: 25,
//     imageUrl: "/img/1.png",
//   },
//   {
//     name: "ФУТБОЛКА",
//     price: 25,
//     imageUrl: "/img/1.png",
//   },
//   {
//     name: "ФУТБОЛКА",
//     price: 25,
//     imageUrl: "/img/1.png",
//   },
// ];

function HomePage() {
  return (
    <div>
      <MainNan />
      <div className="header">
        <Slider />
      </div>
      {/* <div className="main p-50">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>Новинки сезона</h1>
          <div className="search-block ">
            <img width={15} height={15} src="/img/search.png" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="shop d-flex ">
          {items.map((item) => (
            <Card
              title={item.name}
              price={item.price}
              imageUrl={item.imageUrl}
              onPlus={(obj) => onAddToCart(obj)}
              onFavorite={() => console.log("Добавить в закладки")}
            />
          ))}
        </div>
      </div> */}
    </div>
  );
}

export default HomePage;
