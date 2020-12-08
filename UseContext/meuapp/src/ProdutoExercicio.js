import React from "react";
import { GlobalContext } from "./GlobalContextExercicio";

const ProdutoExercicio = () => {
  const global = React.useContext(GlobalContext);
  if (global.dados === null) {
    return null;
  } else {
    return <div> Produto: {global.dados[0].nome}</div>;
  }
};

export default ProdutoExercicio;
