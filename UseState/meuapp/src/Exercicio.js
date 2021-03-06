import React, { useState } from "react";
import Produto from "./Produto";

const Exercicio = () => {
  const [dados, setDados] = useState(null);
  const [carregando, setCarregando] = useState(null)

  async function handleClick(event) {
    setCarregando(true)
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`,
    );
    const json = await response.json();
    setDados(json)
    setCarregando(false)
    console.log(response);
  }

  return (
    <div>
      <button style={{ margin: ".5rem" }} onClick={handleClick}>smartphone</button>
      <button style={{ margin: ".5rem" }} onClick={handleClick}>tablet</button>
      <button style={{ margin: ".5rem" }} onClick={handleClick}>notebook</button>
      {carregando && <p>Carregando...</p>}
      {!carregando && dados ?  <Produto dados={dados}/> : 'Sem produtos'}
    </div>
  );
};

export default Exercicio;
