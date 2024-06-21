import React from 'react'
import "./Padbor.scss"
import vector from "../../assets/images/Vector.svg";
import phone from "../../assets/images/phone.svg";


const Padbor = () => {
  return (
    <div  className='katta'>
    <div className='container'>
        <div className="dobro">
            <div className="content">
                <h1>Получить подробную <a href="#">информацию</a></h1>
                <p>Просто заполните форму, наш менеджер свяжетсяс вами в ближайшее время</p>
                <div className="inputs">
              
                <div className="information-inputs">
            <div className="input">
              <img src={vector} alt="Vector Icon" />
              <input type="text" placeholder="Ваше имя" />
            </div>
            <div className="input">
              <img src={phone} alt="Vector Icon" />
              <input type="tel" placeholder="+375 (29) 0000000" />
            </div>
          </div>
          <div className="input-text">
            {/* <input type="text" placeholder="Комментарий" /> */}
            <textarea name="" id="" cols="30" rows="10">  Комментарий</textarea>

          </div>
          </div>
                <button>Получить информацию</button>
            </div>

        </div>


    </div>
    </div>
  )
}

export default Padbor