import React, { useState } from "react";
import "../style/main.css";
import "../style/login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [rememberMe, setRememberMe] = useState(false); // Added state for "Remember Me"

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(email);
    try {
      const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      console.log(response);
      if (response.status === 200) {
        const dataUser = await response.json();
        console.log(dataUser);

        // Enregistrement du token d'authentification et du login dans le stockage local
        localStorage.setItem("token", dataUser.body?.token);
        localStorage.setItem("login", true);

        navigate("/");
      } else {
        localStorage.removeItem("token");
        localStorage.removeItem("login");
        setErrorMsg("Erreur dans l’identifiant ou le mot de passe"); // Update the message after the timeout
        console.log(
          "Connexion Impossible : Erreur Identifiant ou Mot de passe"
        );
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="sign-in-icon"></i>
          <h1>Sign In</h1>
          <form>
            <div className="input-wrapper">
              <label htmlFor="username">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {/* <div className="input-remember">
              <input
                type="checkbox"
                id="remember-me"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <label htmlFor="remember-me">Remember me</label> */}
            {/* </div> */}
            <button onClick={handleSubmit} className="sign-in-button">
              Sign In
            </button>
            <div className="erreur-msg">{errorMsg}</div>
          </form>
        </section>
      </main>
    </>
  );
};

export default Login;
