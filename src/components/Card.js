function Card(){
    return( 
        <div  className="card">
            <div className="favorite">
              <img height={26} width={26 } src="/img/heart-unlike.png" alt="Unliked"/>
            </div>  
            <img width={200} height={280} src="/img/2.jpg" alt="Perchatki"/>
            <h5>ПЕРЧАТКИ ТРИКОТАЖНЫЕ ХК "ДИНАМО-МИНСК </h5>
            <div className="d-flex justify-between align-center ">
             <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>40 р.</b>
            </div>
                <button className="button">
                    <img width={11} height={11} src="/img/plus.png" alt=""/>
                </button>
            </div>
        </div>
    );
}

export default Card;
