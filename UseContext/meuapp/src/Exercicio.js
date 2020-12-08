import React from 'react';
import Produto2 from './Produto2';
import { GlobalStorage } from './GlobalContext';
import ProdutoExercicio from './ProdutoExercicio';

const Exercicio = () => {
  return (
    <GlobalStorage>
      <ProdutoExercicio />
    </GlobalStorage>
  );
};

export default Exercicio;