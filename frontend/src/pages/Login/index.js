import React, { useState } from "react";
import api from "../../services/api";

export default function Login({ history }) {
  const [email, setEmail] = useState(""); //email->retorna valor do estado de email em tempo real//setEmail atualiza o valor do estado

  async function handleSubmit(event) {
    event.preventDefault(); //faz com o que o formulario previna o funcionamento padrão de enviar o usuario para outra tela

    const response = await api.post("/sessions", { email });

    const { _id } = response.data; //desestruturando a variavel response e pegando so o id do usuario

    localStorage.setItem("user", _id); //armazenando o id do usuario no storage do navegador

    history.push("./dashboard");
  }

  return (
    <>
      <p>
        Ofereça <strong> spots</strong> para programadores e encontre
        <strong> talentos</strong> para sua empresa
      </p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">E-MAIL *</label>
        <input
          type="email"
          id="email"
          placeholder="Seu melhor e-mail"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />

        <button className="btn" type="submit">
          Entrar
        </button>
      </form>
    </>
  );
}
