import { useEffect } from "react";
import logo from "../../assets/images/logo.svg";
import gsap from "gsap";
import "./NavBarStyle.css";
const NavBar = () => {
  useEffect(() => {
    const tl = gsap.timeline({ default: { ease: "power1.Out" } });

    tl.to(".popup-bg", {
      y: 0,
      height: "100%",
      duration: 1,
      delay: 0.5,
      stagger: 0.25,
    })
      .to(".text-area", {
        opacity: 1,
        duration: 1,
      })
      .to(".hide", {
        opacity: 1,
        duration: 0.5,
      })
      .to(".text", {
        transform: "translateY(0)",
        duration: 1,
        delay: 0.2,
        stagger: 0.5,
      })
      .to(".text", {
        transform: "translateY(100%)",
        duration: 1,
        delay: 0.2,
        stagger: 0.5,
      })
      .to(".hide", {
        opacity: 0,
        duration: 0.5,
      })
      .to(".text-area", {
        opacity: 0,
        duration: 0.3,
      })
      .to(".popup-bg", {
        y: 0,
        height: "0%",
        duration: 1,
        delay: 0.5,
        stagger: 0.25,
      })
      .to("header", {
        y: 0,
        duration: 0.6,
      });

    tl.play();

    const menu_toggle = document.querySelector(".menu_toggle");
    const toggleMenu = () => {
      const nav_menu = document.querySelector(".nav_menu");
      nav_menu.classList.toggle("active");
      nav_menu.classList.contains("active")
        ? menu_toggle.setAttribute("name", "close-outline")
        : menu_toggle.setAttribute("name", "menu-outline");
    };
    menu_toggle.addEventListener("click", toggleMenu);

    return () => {
      menu_toggle.removeEventListener("click", toggleMenu);
    };
  }, []);

  return (
    <>
      <div className="popup">
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
            <img src={logo} alt="Logo" className="logo-img" />
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
      <div className="menu_toggle">
        <ion-icon name="menu-outline"></ion-icon>
      </div>
    </>
  );
};

export default NavBar;
