import React, {useState} from 'react'

const Exemplo1 = () => {
  const [ativo, setAtivo] = useState(false)
  const [dados, setDados] = useState({nome: 'Ana Beatriz', idade: '20 anos'})

  function handleClick(){
    setAtivo(!ativo)
    setDados({...dados, faculdade: 'Engenharia de software'})
  }

  return (
    <div>
      <p>{dados.nome}</p>
      <p>{dados.idade}</p>
      <p>{dados.faculdade}</p>
      <button onClick={handleClick}>{ativo ? 'Ativo' : 'Inativo'}</button>
    </div>
  )
}

export default Exemplo1
