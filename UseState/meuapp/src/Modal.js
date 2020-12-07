import React from 'react'

const Modal = ({modal, setModal}) => {
  if (modal){
  return (
    <div>
      <h3>Exemplo de modal</h3>
      <button onClick={() => setModal(false)}>Fechar</button>
    </div> 
  )} else {
    return null
  }
}

export default Modal
