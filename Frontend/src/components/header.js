import React from "react";
import "../style/header.css";
import Logo from "../img/argentBankLogo.png";
import { Link } from "react-router-dom";

const Header = () => {
  function Logout() {
    localStorage.removeItem("token");
    localStorage.setItem("rememberMe", false);
  }

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
          <button className="main-nav-item">Sign In</button>
        </Link>
        <Link to="/">
          <button onClick={Logout} className="sign-out-button">
            Sign Out
          </button>
        </Link>
      </nav>
    </>
  );
};

export default Header;
