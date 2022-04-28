function Drawer(){
    return (
        <div  className="overlay">

        <div className="drawer">
        <h2 className="mb-30 d-flex justify-between mb-30 align-center">Корзина  <img className="removeBtn cu-p " height={24} width={24} src="/img/btn-close.png" alt="Close" /></h2>

        <div className="items">
            <div className="cartItem d-flex align-center mb-20" align-center>
                <div style={{ backgroundImage: 'url(/img/2.jpg)' }} className="cartItemImg"></div>

                <div className="mr-20">
                    <p className="mb-5">
                        ПЕРЧАТКИ ТРИКОТАЖНЫЕ ХК "ДИНАМО-МИНСК
                    </p>
                    <b>40 р.</b>
                </div>
                <img className="removeBtn" height={24} width={24} src="/img/btn-close.png" alt="Close" />
            </div>
        </div>

        <div className="cartTotalBlock">
            <ul >
                <li className="d-flex">
                    <span>Итого: </span>
                    <div></div>
                    <b> 21 498р.</b>
                </li>
                <li>
                    <span>Налог 5%: </span>
                    <div></div>
                    <b> 1074 р.</b>
                </li>
            </ul>
            <button>Оформить заказ</button>
        </div>
    </div>
    </div>
    )
}

export default Drawer;