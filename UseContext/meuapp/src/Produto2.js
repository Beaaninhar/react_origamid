import React from 'react';
import { GlobalContext } from './GlobalContext';

const Produto = () => {
  const global = React.useContext(GlobalContext);


  return (
    <div>
      Produto: {global.contar}
      <p>  </p><button onClick={() => global.AdicionarUm()}>Adicionar</button>
      <br/>
      Produto (adicionar dois): {global.contar}
      <p>  </p><button onClick={() => global.AdicionarDois()}>Adicionar</button>
    </div>
  );
};  

export default Produto;
