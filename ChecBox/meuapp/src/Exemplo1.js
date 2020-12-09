import React from 'react'

const Exemplo1 = () => {
  const [termos, setTermos] = React.useState(false);
  return (
    <form>
      {termos && <p>Aceitou os termos</p>}
      <label>
        <input
          type="checkbox"
          value="termos"
          checked={termos}
          onChange={({target}) => setTermos(target.checked)}
        />
        Aceito os termos.
      </label>
    </form>
  );
}

export default Exemplo1
