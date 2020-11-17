/* eslint-disable array-callback-return */
import React, { useState } from "react";
import ButtonModal from "./ButtonModal";
import Modal from "./Modal";

const App = () => {
  const [modal, setModal] = useState(false)

  return (
    <div>
      {/* <div>
        {modal ? 'Aberto' : 'fechado'}
      </div> */}
      <Modal modal={modal} setModal={setModal} />
      <ButtonModal setModal={setModal} />
    </div>
  );
};

export default App;


/*
EXEMPLO 01
.............................

 const [ativo, setAtivo] = useState(false)
  const [dados, setDados] = useState({ nome: 'André', idade: '38' })
  function handleClick() {
    setAtivo(!ativo)
    setDados({ ...dados, faculdade: 'Possui faculdade' })
    console.log(ativo)
  }
  return (
    <div>
      <p>{dados.nome}</p>
      <p>{dados.idade}</p>
      <p>{dados.faculdade}</p>
      <button onClick={handleClick}>{ativo ? 'Ativo' : 'Inativo'}</button>
    </div>
  );

*/
