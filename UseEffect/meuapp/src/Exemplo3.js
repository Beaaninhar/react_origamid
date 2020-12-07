import React, { useState, useEffect } from "react";
import Produto from "./Produto";

function Exemplo2() {
  const [ativo, setAtivo] = useState(false);

  return (
    <div>
      {ativo && <Produto />}
      <button onClick={() => setAtivo(!ativo)}>{ativo ? 'Desativar' : 'Ativar' }</button>
    </div>
  );
}

export default Exemplo2;
