/* eslint-disable array-callback-return */
import React, { useState } from "react";
import Produto from "./Produto";

const App = () => {
  const [dados, setDados] = useState(null);

  async function handleClick(event) {
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`
    );
    const json = await response.json();
    setDados(json);
  }

  return <div>
    <button style={{margin: '.5rem'}} onClick={handleClick}>notebook</button>
    <button style={{margin: '.5rem'}} onClick={handleClick}>smartphone</button>
    <button style={{margin: '.5rem'}} onClick={handleClick}>tablet</button>
    {dados ? <Produto dados={dados}/> : 'Sem produto disponível'}
  </div>;
};

export default App;

/*
EXEMPLO 01
.............................
 const [ativo, setAtivo] = useState(false)
  const [dados, setDados] = useState({ nome: 'André', idade: '38' })
  function handleClick() {
    setAtivo(!ativo)
    setDados({ ...dados, faculdade: 'Possui faculdade' })
    console.log(ativo)
  }
  return (
    <div>
      <p>{dados.nome}</p>
      <p>{dados.idade}</p>
      <p>{dados.faculdade}</p>
      <button onClick={handleClick}>{ativo ? 'Ativo' : 'Inativo'}</button>
    </div>
  );

*/
