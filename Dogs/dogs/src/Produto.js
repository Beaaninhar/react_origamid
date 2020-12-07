import React, { useContext } from 'react';
import { GlobalStorage } from './GlobalStorage';


const Produto = () => {
  const global = useContext(GlobalStorage);

  function handleClick() {
    global.setContar((contar) => contar + 1)
  }

  return <div>Produto: {global.contar} <button onClick={handleClick}> Add</button></div>;
};

export default Produto;