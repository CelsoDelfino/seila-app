import React, { useState } from "react";
import "./login.css";
import rockstar from "../assets/rockstar.png";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleAcessar = (e) => {
    e.preventDefault();

    if (email !== "" && senha !== "") {
      console.log("email:" + email + "\nsenha:" + senha);
      alert("Cadastrado");
    } else {
      alert("Preencha todos os campos");
    }
  };

  return (
    <div className="area-login">
      <div className="login">
        <div className="login-img">
          <img src={rockstar} />
        </div>

        <form>
          <input 
            type="text"
            placeholder="seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input 
            type="password"
            placeholder="senha"
            value={senha}
            onChange={(e) => senha(e.target.value)}
          />
          <input 
          type="submit" 
          value="entrar">
          </input>
        </form>
        <h3>Ainda nao  tem uma conta ? <Link>Cadastre-se</Link></h3>
      </div>
    </div>
  );
}
