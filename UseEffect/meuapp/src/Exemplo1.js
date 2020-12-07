import React, {useState,useEffect } from 'react'

function Exemplo1() {
  const [contar, setContar] = useState(0)

  useEffect(() =>{
    console.log('executou')
  }, [])

  useEffect(() =>{
    document.title = 'Total ' + contar;
  }, [contar])

  return <div>
    <button onClick={() => setContar(contar + 1)}>{contar}</button>
  </div>;
}

export default Exemplo1
