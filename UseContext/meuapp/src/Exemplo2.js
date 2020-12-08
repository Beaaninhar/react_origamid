import React from 'react';
import Produto2 from './Produto2';
import { GlobalStorage } from './GlobalContext';

const App = () => {
  return (
    <GlobalStorage>
      <Produto2 />
    </GlobalStorage>
  );
};

export default App;