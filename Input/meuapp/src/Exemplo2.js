import React, { useState } from "react";

const Exemplo2 = () => {
  const [form, setForm] = React.useState({
    nome: "",
    email: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log(event);
  }

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input
        id="nome"
        type="text"
        name="nome"
        value={form.nome}
        onChange={handleChange}
      ></input>

      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="text"
        name="email"
        value={form.email}
        onChange={handleChange}
      ></input>
      <button>Enviar</button>
      <p>Seu Nome é: {form.nome}</p>
      <p>Seu Email é: {form.email}</p>
    </form>
  );
};

export default Exemplo2;
