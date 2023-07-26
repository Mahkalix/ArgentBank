import React from "react";
import "../style/header.css";
import Logo from "../img/argentBankLogo.png";
import { Link } from "react-router-dom";

const header = () => {
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
        <div>
          <Link to="/Error">
            <div class="main-nav-item" href="./sign-in.html">
              <i class="fa fa-user-circle"></i>
              Sign In
            </div>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default header;
