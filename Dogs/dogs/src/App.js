/* eslint-disable array-callback-return */
import React, { useMemo, useState } from "react";
import Produto from "./Produto";

const App = () => {
  const [contar, setContar] = useState(0)

  const valor = useMemo(() => {
    const localItem = window.localStorage.getItem('produto')
    console.log('Aconteceu o memo')
    return localItem
  }, [])
  console.log(valor)
  return (
    < div >
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </div>
  );
};

export default App;