import React, { useEffect, useState } from 'react';
import "./Nav.css";
import { Link } from "react-router-dom";
import NetFlixLogo from "../../images/NetFlixLogo.png";
import NetFlixAvatar from "../../images/NetflixAvatar.png";

export default function Nav() {
  const [show, setShow] = useState(false);

  const NavBarVisibility = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", NavBarVisibility);
    return () => {
      window.removeEventListener("scroll", NavBarVisibility);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav-black"}`}>
      <Link to="/">
        <img className="nav-logo" alt="logo" src={NetFlixLogo} />
      </Link>
      <img src={NetFlixAvatar} className="nav-avatar" alt="img" />
    </div>
  );
}
