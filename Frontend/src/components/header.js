import React from "react";
import "../style/header.css";
import Logo from "../img/argentBankLogo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="main-nav">
        <Link to="/">
          <div className="main-nav-logo">
            <img
              className="main-nav-logo-image"
              src={Logo}
              alt="Argent Bank Logo"
            />
            <h1 className="sr-only">Argent Bank</h1>
          </div>
        </Link>

        <Link to="/login">
          <div className="main-nav-item">Sign In</div>
        </Link>
      </nav>
    </>
  );
};

export default Header;
