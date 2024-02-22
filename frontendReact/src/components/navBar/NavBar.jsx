import React, { useState } from "react";
import "./NavBarStyle.css";

const NavBar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const toggleMenu = () => {
    setIsMenuActive((prevState) => !prevState);
  };

  return (
    <div className="App">
      <div className={`popup ${isMenuActive ? "active" : ""}`}>
        <div className="popup-bg-1 popup-bg"></div>
        <div className="popup-bg-2 popup-bg"></div>
        <div className="popup-bg-3 popup-bg"></div>
        <div className="container popup-container">
          <div className="text-area">
            <h1 className="hide">
              <span className="text">Compra ropa nueva</span>
            </h1>
            <h1 className="hide">
              <span className="text">Luce nuevo look</span>
            </h1>
            <h1 className="hide">
              <span className="text">Sé original</span>
            </h1>
          </div>
        </div>
      </div>
      <header>
        <div className="container">
          <a href="#!" className="logo">
            <img src="images/logo.png" alt="Logo" className="logo-img" />
          </a>
          <div className="nav_actions">
            <div className="input-search-container">
              <input type="text" name="search" autoComplete="off" />
              <div className="search-btn">
                <ion-icon name="search-outline"></ion-icon>
              </div>
            </div>
            <div className="cart-bucket">
              <ion-icon name="bag-add-outline"></ion-icon>
              <span>(0) Artículos</span>
            </div>
          </div>
        </div>
      </header>
      {/* Evento de clic para el menú */}
      <div className="menu_toggle" onClick={toggleMenu}>
        <ion-icon
          name={isMenuActive ? "close-outline" : "menu-outline"}
        ></ion-icon>
      </div>
    </div>
  );
};

export default NavBar;
