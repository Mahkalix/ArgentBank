import React from "react";
import "../style/main.css";
import "../style/login.css";

const Login = () => {
  return (
    <>
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="sign-in-icon"></i>
          <h1>Sign In</h1>
          <form>
            <div className="input-wrapper">
              <label for="username">Username</label>
              <input type="text" id="username" />
            </div>
            <div className="input-wrapper">
              <label for="password">Password</label>
              <input type="password" id="password" />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label for="remember-me">Remember me</label>
            </div>
            <a href="./user.html" className="sign-in-button">
              Sign In
            </a>
            <button className="sign-in-button"> Sign Out</button>
          </form>
        </section>
      </main>
    </>
  );
};

export default Login;
