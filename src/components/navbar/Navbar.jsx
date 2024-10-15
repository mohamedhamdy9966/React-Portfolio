import "./Navbar.css";
import { useRef, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import logo from "../../assets/logo.svg";
import underline from "../../assets/nav_underline.svg";
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

const Navbar = () => {

  const [menu, setMenu] = useState("home");

  const menuRef = useRef();

  const openMenu = ()=> {
    menuRef.current.style.right="0";
  };

  const closeMenu = ()=> {
    menuRef.current.style.right="-350px";
  };

  return (
    <div className="navbar">
      <img src={menu_open} onClick={openMenu} alt="menu-toggle" className="nav-mob-open"/>
      <ul className="nav-menu" ref={menuRef}>
        <img src={menu_close} onClick={closeMenu} alt="menu-toggle" className="nav-mob-close"/>
        <li
          onClick={() => {
            setMenu("home");
          }}
        >
          <AnchorLink className="anchor" href="#home">
            <p>Home</p>
          </AnchorLink>
          {menu === "home" ? <img src={underline} alt="underline" /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("about");
          }}
        >
          <AnchorLink className="anchor" offset={50} href="#about">
            <p>About Me</p>
          </AnchorLink>
          {menu === "about" ? <img src={underline} alt="underline" /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("services");
          }}
        >
          <AnchorLink className="anchor" offset={50} href="#services">
            <p>Services</p>
          </AnchorLink>
          {menu === "services" ? (
            <img src={underline} alt="underline" />
          ) : (
            <></>
          )}
        </li>
        <li
          onClick={() => {
            setMenu("works");
          }}
        >
          <AnchorLink className="anchor" offset={50} href="#works">
            <p>Works</p>
          </AnchorLink>
          {menu === "works" ? <img src={underline} alt="underline" /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("contact");
          }}
        >
          <AnchorLink className="anchor" offset={50} href="#contact">
            <p>Contact</p>
          </AnchorLink>
          {menu === "contact" ? <img src={underline} alt="underline" /> : <></>}
        </li>
      </ul>
      <div className="nav-connect"><AnchorLink className="anchor" offset={50} href="#contact">Connect With Me</AnchorLink></div>
    </div>
  );
};

export default Navbar;
