import React from "react";
import "../style/header.css";
import Logo from "../img/argentBankLogo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav class="main-nav">
        <Link to="/">
          <div class="main-nav-logo">
            <img
              class="main-nav-logo-image"
              src={Logo}
              alt="Argent Bank Logo"
            />
            <h1 class="sr-only">Argent Bank</h1>
          </div>
        </Link>

        <Link to="/login">
          <div class="main-nav-item">Sign In</div>
        </Link>
      </nav>
    </>
  );
};

export default Header;
