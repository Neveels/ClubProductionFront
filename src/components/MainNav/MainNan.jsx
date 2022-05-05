import cl from "./MainNav.module.css";
import React from "react";

function MainNan() {
  return (
    <nav className={cl.main_nav}>
      <ul>
        <li>
          <a href="/tickets">Билеты</a>
        </li>
        <li>
          <a href="/team">Команда</a>
        </li>
        <li>
          <a className={cl.a} href="/matches">
            Матчи
          </a>
        </li>
        <li>
          <a className={cl.a} href="/tickets">
            Клуб
          </a>
        </li>
        <li>
          <a className={cl.a} href="/shop">
            Магазин
          </a>
        </li>
        <li>
          <a className={cl.a} href="/news">
            Новости
          </a>
        </li>
        <li>
          <a className={cl.a} href="https://www.fonbet.by/">
            Fonbet
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default MainNan;
