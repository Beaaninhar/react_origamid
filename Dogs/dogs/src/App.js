/* eslint-disable array-callback-return */
import React, { useMemo, useState } from "react";
import Produto from "./Produto";

const App = () => {
  const [contar, setContar] = useState(0)

  const handleClick = React.useCallback(() => {
    setContar((contar) => contar + 1);
  }, []);

  console.log(valor)
  return (
    < div >
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </div>
  );
};

export default App;