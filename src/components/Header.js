function Header(){
    return(
        <header className="d-flex justify-between align-center">
        <div className="d-flex align-center ">
            <img width={75} height={75} src="/img/logo.jpg" />
            <div>
                <h3 className="text-uppercase">Dinamo-Minsk</h3>
                <p>Hockey Club</p>
            </div>
        </div>
        <ul className="d-flex">
            <li className="mr-15">
                <img width={25} height={25} src="/img/shopping-cart.png" />
                <span>10000 руб.</span>
            </li>
            <li>
                <button className="logoButton" href="/registration">
                    Регистрация
                    <img width={25} height={25} src="/img/user.png" />
                </button>
            </li>
        </ul>
    </header>
    )
}

export default Header;