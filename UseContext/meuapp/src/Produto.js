import React, { useContext } from "react";
import UserContext from "./UserContext";

const Produto = () => {
  const dados = useContext(UserContext);
  console.log(dados);
  return <div>{dados.nome}</div>;
};

export default Produto;
