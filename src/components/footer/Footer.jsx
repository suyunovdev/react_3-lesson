import "./Footer.scss";
import logo from "../../assets/images/Logo.svg";
import social from "../../assets/images/social.svg";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="" />
          <img src={social} alt="" />
        </div>
        <div className="links">
          <div className="link">
            <h2>Продукция</h2>
            <a href="#">Ламинатные тубы</a>
            <a href="#">Экструзионные тубы</a>
            <a href="#">Другая упаковка</a>
          </div>
          <div className="link">
            <h2>Компания</h2>
            <a href="#">О нас</a>
            <a href="#">Наша команда</a>
            <a href="#">Сертификаты</a>
          </div>
          <div className="link">
            <h2>Разделы</h2>
            <a href="#">Контакты</a>
            <a href="#">Новости</a>
            <a href="#">Вакансии</a>
          </div>
          <div className="countreis">
            <div className="country">
              <h3>Беларусь</h3>
              <a href="#">+375 (17) 270 53 77</a>
              <a href="#">+375 (17) 270 53 78</a>
            </div>
            <div className="country">
              <h3>Европа</h3>
              <a href="#">+48 73 1111 044</a>
            </div>
            <div className="country">
              <h3>Москва</h3>
              <a href="#">+7 (495) 280 73 44</a>
              <a href="#">+7 (495) 280 73 44</a>
            </div>
            <div className="country">
              <h3>Екатеринбург</h3>
              <a href="#">+7 (343) 346 82 06</a>
            </div>
          </div>
        </div>
        <div className="aftor">
          <p>
            © 2022 Leangroup. All Rights Reserved. Разработка и продвижение
            сайтов SkyWeb.by
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
