import React, { useState } from "react";
import { useEffect } from "react";
import "../style/main.css";
import "../style/login.css";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

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

        // Enregistrement du token d'authentification dans le stockage local
        localStorage.setItem("token", dataUser.body?.token);

        // Si "Remember Me" est coché, enregistrez également l'email et le mot de passe
        if (rememberMe) {
          localStorage.setItem("email", email);
          localStorage.setItem("password", password);
        } else {
          // Si "Remember Me" n'est pas coché, supprimez les valeurs précédemment stockées
          localStorage.removeItem("email");
          localStorage.removeItem("password");
        }

        navigate("/");
      } else {
        localStorage.removeItem("token");
        setErrorMsg("Erreur dans l’identifiant ou le mot de passe"); // Update the message after the timeout
        console.log(
          "Connexion Impossible : Erreur Identifiant ou Mot de passe"
        );
      }
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    // Récupérer l'état de "Remember Me" depuis le localStorage
    const rememberMeFromStorage = localStorage.getItem("rememberMe");

    // Si "Remember Me" est stocké dans le localStorage et est égal à "true", cochez la case
    if (rememberMeFromStorage === "true") {
      setRememberMe(true);
    }

    // Récupérer l'email et le mot de passe depuis le localStorage
    const emailFromStorage = localStorage.getItem("email");
    const passwordFromStorage = localStorage.getItem("password");

    // Si des valeurs sont stockées dans le localStorage, pré-remplissez les champs
    if (emailFromStorage && passwordFromStorage) {
      setEmail(emailFromStorage); // Pré-remplir l'email
      setPassword(passwordFromStorage); // Pré-remplir le mot de passe
    }
  }, []);

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
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="input-remember">
              <input
                type="checkbox"
                id="remember-me"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />

              <label htmlFor="remember-me">Remember me</label>
            </div>

            <div className="input-show-password">
              <input
                type="checkbox"
                id="show-password"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
              />
              <label htmlFor="show-password">Show Password</label>
            </div>
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

export default SignIn;
