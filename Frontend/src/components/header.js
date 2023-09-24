import React from "react";
import "../style/header.css";
import Logo from "../img/argentBankLogo.png";
import { Link } from "react-router-dom";
import Navigation from "./navigation";

const Header = ({ token, handleLogout }) => {
  return (
    <header>
      <Link to="/">
        <div className="main-nav-logo">
          <img
            className="main-nav-logo-image"
            src={Logo}
            alt="Argent Bank Logo"
          />
        </div>
      </Link>
      <Navigation token={token} handleLogout={handleLogout} />
    </header>
  );
};

export default Header;
