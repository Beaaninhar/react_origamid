import React from "react";
import useLocalStorage from "./useLocalStorage";

const Exemplo1 = () => {
  const [produto, setProduto] = useLocalStorage("produto", "");

  function handleClick({ target }) {
    setProduto(target.innerText);
  } 

  return (
    <div>
      <p style={{margin: '.5rem'}} >Preferido: {produto}</p>
      <button style={{margin: '.5rem'}} onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>smartphone</button>
    </div>
  );
};

export default Exemplo1;
