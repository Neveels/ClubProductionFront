import React, { useState } from "react";
import axios from "axios";
import Player from "./Player/Player";
import cl from "./PlayersPage.module.css";
import PlayersService from "../../service/players.service";

const PlayersPage = () => {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    PlayersService.getPlayers().then((resp) => {
      setItems(resp.data);
    });
  }, [setItems]);

  return (
    <div className={cl.wrap}>
      <div className={cl.MembersOfTeam}>
        <img
          className={cl.Image}
          src="/img/goalkeeper.png"
          alt="goalkeeper"
          width={30}
          height={30}
        />
        <h2>Вратари</h2>
      </div>

      <section className="shop d-flex flex-wrap mb-20">
        {items
          .filter((Players) => Players.role !== "a" && Players.role !== "d")
          .map((item) => (
            <Player
              country={item.country}
              age={item.age}
              image={item.image}
              name={item.name}
              number={item.numberOfPlayer}
            />
          ))}
      </section>

      <div className={cl.MembersOfTeam}>
        <img
          className={cl.Image}
          src="/img/security.png"
          alt="goalkeeper"
          width={30}
          height={30}
        />
        <h2>Защитники</h2>
      </div>

      <section className="shop d-flex mb-20">
        {items
          .filter((Players) => Players.role !== "g" && Players.role !== "a")
          .map((item) => (
            <Player
              country={item.country}
              age={item.age}
              image={item.image}
              name={item.name}
              number={item.numberOfPlayer}
            />
          ))}
      </section>

      <div className={cl.MembersOfTeam}>
        <img
          className={cl.Image}
          src="/img/sword.png"
          alt="goalkeeper"
          width={30}
          height={30}
        />
        <h2>Нападающие</h2>
      </div>

      <section className="shop d-flex mb-20">
        {items
          .filter((Players) => Players.role !== "g" && Players.role !== "d")
          .map((item) => (
            <Player
              country={item.country}
              age={item.age}
              image={item.image}
              name={item.name}
              number={item.numberOfPlayer}
            />
          ))}
      </section>
    </div>
  );
};

export default PlayersPage;
