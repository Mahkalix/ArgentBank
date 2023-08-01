import React from "react";
import { Link } from "react-router-dom";
import IconChat from "../img/icon-chat.png";
import IconMoney from "../img/icon-money.png";
import IconSecurity from "../img/icon-security.png";
import BankTree from "../img/bank.jpg";
import Arrow from "../img/svg/arrow.svg";
import "../style/main.css";

const Main = () => {
  return (
    <>
      <main>
        <div class="hero">
          <img className="banktree" src={BankTree} alt="lol" />
          <p className="little-slogan">SAVE & MANAGE YOUR MONEY</p>
          <h1 className="slogan">
            Banking <br />
            You Want <br />
            To Use
          </h1>
          <Link to="/login">
            <div class="hero-content">
              <p>JOIN 5M ARGENTBANK CLIENTS</p>
              <img className="arrow" src={Arrow} alt="arrow" />
            </div>
          </Link>
        </div>
        <section class="features">
          <h2 class="sr-only">Features</h2>
          <div class="feature-item">
            <img src={IconChat} alt="Chat Icon" class="feature-icon" />
            <h3 class="feature-item-title">You are our #1 priority</h3>
            <p>
              Need to talk to a representative? You can get in touch through our
              24/7 chat or through a phone call in less than 5 minutes.
            </p>
          </div>
          <div class="feature-item">
            <img src={IconMoney} alt="Chat Icon" class="feature-icon" />
            <h3 class="feature-item-title">More savings means higher rates</h3>
            <p>
              The more you save with us, the higher your interest rate will be!
            </p>
          </div>
          <div class="feature-item">
            <img src={IconSecurity} alt="Chat Icon" class="feature-icon" />
            <h3 class="feature-item-title">Security you can trust</h3>
            <p>
              We use top of the line encryption to make sure your data and money
              is always safe.
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Main;
