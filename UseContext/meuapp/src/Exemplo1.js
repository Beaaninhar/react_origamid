import React from 'react'
import UserContext from './UserContext'
import Produto from './Produto'

const Exemplo1 = () => {
  console.log(UserContext)
  return (
    <UserContext.Provider value={{nome: "Ana"}}>
      <Produto/>
    </UserContext.Provider>
  )
}

export default Exemplo1
