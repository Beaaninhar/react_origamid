import React, { useState } from "react";

const Exemplo1 = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log(event);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input
        id="nome"
        type="text"
        name="nome"
        value={nome}
        onChange={(event) => setNome(event.target.value)}
      ></input>

<label htmlFor="email">Email</label>
      <input
        id="email"
        type="text"
        name="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      ></input>
      <button>Enviar</button>
    </form>
  );
};

export default Exemplo1;
