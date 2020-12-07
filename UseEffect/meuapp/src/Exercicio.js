import React, { useState, useEffect } from "react";
import ProdutoExercicio from "./ProdutoExercicio";

function Exercicio() {
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    const produtoLocal = window.localStorage.getItem('produto');
    if (produtoLocal !== 'null') setProduto(produtoLocal);
  }, []);

  useEffect(() => {
    if (produto !== null) window.localStorage.setItem('produto', produto);
  }, [produto]);

  function handleClick({ target }) {
    setProduto(target.innerText);
  }
  return (
    <div>
      <h1>Preferência: {produto}</h1>
      <button onClick={handleClick} style={{ margin: ".5rem" }}>
        notebook
      </button>
      <button onClick={handleClick} style={{ margin: ".5rem" }}>
        smartphone
      </button>
      <ProdutoExercicio produto={produto} />
    </div>
  );
}

export default Exercicio;
