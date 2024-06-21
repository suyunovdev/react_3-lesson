import React from 'react'
import "./Novosti.scss"
import news1 from "../../assets/images/news1.png";
import news2 from "../../assets/images/news2.png";
import news3 from "../../assets/images/news3.png";

function Novoste() {
  return (
    <div className="News">
      <div className="container">
        <div className="news-text">
          <h2>Новости</h2>
        </div>
        <div className="news-all">
          <div className="news-card">
            <img src={news1} alt="" />
            <p>28.01.2022</p>
            <h4>ЛеанГрупп серебряный призер EcoVadis!</h4>
          </div>
          <div className="news-card">
            <img src={news2} alt="" />
            <p>21.01.2022</p>
            <h4 className="width">ЛеанГрупп серебряный призер EcoVadis!</h4>
          </div>
          <div className="news-card">
            <img src={news3} alt="" />
            <p>16.12.2021</p>
            <h4>Туба, как вид упаковки</h4>
          </div>
        </div>
        <div className="news-btn">
          <button>Все новости</button>
        </div>
      </div>
    </div>
  )
}

export default Novoste
