import React, { useState } from 'react'

function App() {
  const [mensagem, setMensagem] = useState('');
  return <div><form>
    <textarea
      id="mensagem"
      value={mensagem}
      rows="5"
      onChange={({ target }) => setMensagem(target.value)}
    />
    <p>{mensagem}</p>
  </form></div>;
}

export default App;
