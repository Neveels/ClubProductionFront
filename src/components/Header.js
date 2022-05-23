import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header className="d-flex justify-between align-center">
      <div className="d-flex align-center ">
        <Link to="/">
          <img width={90} height={90} src="/img/logo.jpg" alt="logo" />
        </Link>
        <div className="headerText">
          <h3 className="text-uppercase">Dinamo-Minsk</h3>
          <p>Hockey Club</p>
        </div>
      </div>
      <ul className="d-flex">
        <li className="mr-15 cu-p">
          <Link to="/team">
            <img width={40} height={40} src="/img/group.png" alt="group" />
          </Link>
        </li>
        <li onClick={props.onClickCart} className="mr-15 cu-p">
          <img
            width={40}
            height={40}
            src="/img/shopping-cart.png"
            alt="shopping-cart"
          />
        </li>
        <li>
          <Link to="/auth">
            {props.auth ? (
              <h3
                onClick={() => {
                  localStorage.clear();
                  window.location.reload();
                }}
              >
                Log Out
              </h3>
            ) : (
              <img width={40} height={40} src="/img/boy.png" alt="user" />
            )}
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
