import React, { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";
import useFetch from "./useFetch";

const Exemplo2 = () => {
  const [produto, setProduto] = useLocalStorage("produto", "");
  const { data, loading, error, request } = useFetch();

  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  useEffect(() => {
    async function fetchData() {
      const {response, json} = await request("https://ranekapi.origamid.dev/json/api/produto/");
    }
    fetchData()
  }, [request]);

  if (error) return <p>{error}</p>;
  if (loading) return <p>Carregando...</p>;
  if (data){
    return (
      <div>
        <p style={{ margin: ".5rem" }}>Preferido: {produto}</p>
        <button style={{ margin: ".5rem" }} onClick={handleClick}>
          notebook
        </button>
        <button onClick={handleClick}>smartphone</button>

        {data.map((produto) => (
          <div key={produto.id}>
            <h1>{produto.nome}</h1>
          </div>
        ))}
      </div>
    );
  }else{
    return null
  }
};

export default Exemplo2;
