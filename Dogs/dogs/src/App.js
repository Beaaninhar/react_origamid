/* eslint-disable array-callback-return */
import React, { useState } from "react";



const App = () => {
  const [contar, setContar] = useState(1)
  const [items, setItems] = React.useState(['Item 1']);

  function handleClick() {
    setContar((contar) => {
      return contar + 1;
    });
    setItems((items) => [...items, 'Item ' + (contar + 1)]);
  }
  return (
    <div>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
      <button onClick={handleClick}>{contar}</button>
    </div>
  );
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
