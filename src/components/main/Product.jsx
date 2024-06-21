import React from 'react'
import "./Product.scss"
import image1 from '../../assets/images/image1.png'
import image2 from '../../assets/images/image2.png'
import image3 from '../../assets/images/image3.png'
import image4 from '../../assets/images/image4.png'
import image5 from '../../assets/images/image5.png'
import arrow from '../../assets/images/Vector.png'
import arrow2 from '../../assets/images/ong.png'

const product = () => {
  return (
    <div>
        <div className='product'>
            <div className="container">
                <div className="cards">
                <h1>Качество продукции подтверждают <a href="#">сертификаты</a></h1>
                <div className="sertificate">
                    <img src={arrow} alt="" />
                    <img src={image1} alt="" />
                    <img src={image2} alt="" />
                    <img src={image3} alt="" />
                    <img src={image4} alt="" />
                    <img src={image5} alt="" />
                    <img src={arrow2} alt="" />
                </div>
            </div>
            </div>

        </div>

      
    </div>
  )
}

export default product
