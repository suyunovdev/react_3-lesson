import React from 'react'
import "./Komanda.scss"
import person1 from '../../assets/images/person1.png'
import person2 from '../../assets/images/person2.png'
import person3 from '../../assets/images/person3.png'
import person4 from '../../assets/images/person4.png'
import person5 from '../../assets/images/person5.png'

function Komanda() {
  return (
    <div className='container'>
        <div className="person">
        <h1>Наша <a href="#">команда</a></h1>

        <div className="team-cards">
          <div className="kart">
            <img src={person1} alt="person" />
            <h3>Войнич Дарья</h3>
            <p>Заместитель директора по продажам</p>
            <a href="#">+375 (17) 270-53-77 (317)</a>
          </div>
          <div className="kart">
            <img src={person2} alt="person" />
            <h3>Мисько Екатерина</h3>
            <p>Начальник отдела сопровождения</p>
            <a href="#">+375 (17) 270-53-77 (115)</a>
            <a href="#"> +375 29 112-73-48</a>
            <a href="#"> k.melnichenko@leangroup.by</a>
          </div>
          <div className="kart">
            <img src={person3} alt="person" />
            <h3>Дмитроченко Дмитрий</h3>
            <p>Начальник отдела допечатной подготовки</p>
            <a href="#">+375 (17) 270-53-77 (333)</a>
            <a href="#"> +375 29 360-32-26</a>
            <a href="#">dmitrochenko@leangroup.by</a>
          </div>
          <div className="kart">
            <img src={person4} alt="person" />
            <h3>Антух Евгений</h3>
            <p>Начальник отдела снабжения</p>
            <a href="#">+375 (17) 270-53-77 (148)</a>
            <a href="#"> +375 44 764-16-28</a>
            <a href="#">j.antuh@leangroup.by</a>
          </div>
          <div className="kart">
            <img src={person5} alt="person" />
            <h3>Мисник Елена</h3>
            <p>Специалист по работе с клиентами</p>
            <a href="#">+375 (17) 270-53-77 (322)</a>
            <a href="#"> +375 29 329-34-03</a>
            <a href="#">e.misnik@leangroup.by</a>
          </div>
        </div>
        <div className="karta-btn">
          <button>Наша команда</button>
        </div>
        </div>


    </div>
  )
}

export default Komanda