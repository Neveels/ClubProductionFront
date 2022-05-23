import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Registration from "./components/RegistrationPage/Registration";
import HomePage from "./components/HomePage/HomePage";
import React, { useEffect, useState } from "react";
import Auth from "./components/Auth/Auth";
import Shop from "./components/Shop/Shop";
import PlayersPage from "./components/PlayersPage/PlayersPage";
import AdminBoard from "./components/AdminBoard/AdminBoard";

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);

  const [user, setUser] = useState({});
  const [auth, setAuth] = useState(false);

  const onAddToCart = (obj) => {
    setCartItems([...cartItems, obj]);
  };
  // localStorage.clear();
  useEffect(() => {
    console.log(localStorage.getItem("user"));
    localStorage.getItem("user") &&
      setUser(JSON.parse(localStorage.getItem("user") || ""));
    localStorage.getItem("auth") &&
      setAuth(JSON.parse(localStorage.getItem("auth") || ""));
  }, []);

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer items={cartItems} onClose={() => setCartOpened(false)} />
      )}
      <Header onClickCart={() => setCartOpened(true)} auth={auth} />

      <Routes>
        <Route path="/registration" element={<Registration />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/team" element={<PlayersPage />} />
      </Routes>
      {user.roles == "ROLE_ADMIN" && <AdminBoard />}
    </div>
  );
}

export default App;
