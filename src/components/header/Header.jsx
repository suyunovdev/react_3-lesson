
import React, { useState } from 'react';
import logo from "../../assets/images/Logo.svg";
import "../header/Header.scss";

const Header = () => {
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleProductDropdown = () => {
    setIsProductDropdownOpen(!isProductDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="Header">
      <div className="container">
        <div className="header-all">
          <div className="header-left">
            <img src={logo} alt="Logo" />
          </div>
          <div className={`header-middle ${isMobileMenuOpen ? "open" : ""}`}>
            <div className="dropdown">
              <button
                className={`dropdown-toggle ${isProductDropdownOpen ? "open" : ""}`}
                onClick={toggleProductDropdown}
              >
                Продукция
              </button>
              {isProductDropdownOpen && (
                <div className="dropdown-menu">
                  <a href="#">Ламинатные тубы</a>
                  <a href="#">Экструзионные тубы</a>
                  <a href="#">Другая упаковка</a>
                </div>
              )}
            </div>
            <a href="#">Сертификаты</a>
            <a href="#">Наша команда</a>
            <a href="#">О нас</a>
            <a href="#">Новости</a>
            <a href="#">Вакансии</a>
            <a className="contact" href="#">
              Контакты 
            </a>
          </div>
          <div className="header-right">
            <a href="#">RU</a>
            <a className="en" href="#">EN</a>
            <button className="hamburger" onClick={toggleMobileMenu}>
              ☰
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
