import React from 'react'
import './Nasha.scss'
import img1 from '../../assets/images/1.png'
import img2 from '../../assets/images/2.png'
import img3 from '../../assets/images/3.png'
import img4 from '../../assets/images/4.png'
import img5 from '../../assets/images/5.png'


const Nasha = () => {
  return (
    <div className='naw'>
        <div className="container">
            <div className="naw_main">
        <h1>Наша <a href="#">продукция</a></h1>
        <div className="btns">
            <button>Ламинатные тубы</button>
            <button>Экструзионные тубы</button>
            <button>Другая упаковка</button>
        </div>
        <div className="tovar">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
            <img src={img5} alt="" />

        </div>
        <button>Перейти в каталог</button>

            </div>

        </div>


    </div>
  )
}

export default Nasha