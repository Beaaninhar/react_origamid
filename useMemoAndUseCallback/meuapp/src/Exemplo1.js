import React, { useState, useMemo } from "react";

function operacaoLenta() {
  let c;
  for (let i = 0; i < 100000000; i++) {
    c = i + i / 10;
  }
  return c;
}

function Exemplo1() {
  const [contar, setContar] = useState(0);

  // const valor = useMemo(() => {
  //   const localItem = window.localStorage.getItem("produto");
  //   console.log("aconteceu o memo");
  //   return localItem;
  // });
  const t1 = performance.now();
  const valor = useMemo(() => operacaoLenta(), []);
  console.log(valor);
  console.log(performance.now() - t1)

  return (
    <div>
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </div>
  );
}

export default Exemplo1;
