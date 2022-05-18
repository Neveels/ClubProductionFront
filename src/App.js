import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Registration from "./components/RegistrationPage/Registration";
import HomePage from "./components/HomePage/HomePage";
import React, {useEffect, useState} from "react";
import Auth from "./components/Auth/Auth";
import MainNan from "./components/MainNav/MainNan";
import Shop from "./components/Shop/Shop";
import Team from "./components/Team/Team";

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);

  const [user, setUser] = useState({})
  const [auth, setAuth] = useState(false)

  const onAddToCart = (obj) => {
    setCartItems([...cartItems, obj]);
  };
  console.log(cartItems);

  useEffect(() => {
    localStorage.getItem("user") && setUser(JSON.parse(localStorage.getItem("user")))
    localStorage.getItem("auth") && setAuth(JSON.parse(localStorage.getItem("auth") || ""))
  }, [])


  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer items={cartItems} onClose={() => setCartOpened(false)} />
      )}
      <Header onClickCart={() => setCartOpened(true)} auth={auth}/>

      <Routes>
        <Route path="/registration" element={<Registration />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </div>
  );
}

export default App;
