import React, { useState } from "react";
import ButtonModal from "./ButtonModal";
import Modal from "./Modal";

const Exemplo2 = () => {
  const [modal, setModal] = useState(false);
  return (
    <div>
      <div>{modal ? "Modal está aberto" : "Modal está fechado"}</div>
      <Modal modal={modal} setModal={setModal} />
      <br />
      <ButtonModal setModal={setModal} />
    </div>
  );
};

export default Exemplo2;
