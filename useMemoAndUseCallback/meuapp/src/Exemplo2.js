import React, { useState, useCallback } from "react";


const set1 = new Set();
const set2 = new Set();

const Produto = () => {
  const func1 = () => {
    console.log('Teste');
  };

  const func2 = React.useCallback(() => {
    console.log('Teste');
  }, []);

  set1.add(func1);
  set2.add(func2);

  console.log('Set1:', set1);
  console.log('Set2:', set2);
  return (
    <div>
      <p onClick={func1}>Produto 1</p>
      <p onClick={func2}>Produto 2</p>
    </div>
  );
};

function Exemplo2() {
  const [contar, setContar] = useState(0);

  const handleClick = useCallback(() => {
    setContar((contar) => contar + 1);
  }, []);

  return (
    <div>
       <Produto />
      <button onClick={handleClick}>{contar}</button>
    </div>
  );
}

export default Exemplo2;
