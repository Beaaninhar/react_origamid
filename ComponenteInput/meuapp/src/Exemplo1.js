import React, {useState} from 'react'
import Checkbox from './Form/Checkbox';
import Input from './Form/Input';
import Radio from './Form/Radio';
import Select from './Form/Select';

const Exemplo1 = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [produto, setProduto] = useState("");
  const [cor, setCor] = useState('');
  const [fruta, setFruta] = useState([]);
  const [termos, setTermos] = useState([]);
  
  return (
    <div>
      <Input label="Nome" value={nome} setValue={setNome} />
      <Input label="Email" value={email} setValue={setEmail} />
      <br />
      <hr/>
      <Select
        options={["Notebook", "Smartphone", "Tablet"]}
        value={produto}
        setValue={setProduto}
      />
      <br/>
      <hr/>
      <Radio
        options={['azul', 'verde', 'amarelo']}
        value={cor}
        setValue={setCor}
      />
      <br/>
      <hr/>
      <Checkbox
        options={['Uva', 'Laranja', 'Limão']}
        value={fruta}
        setValue={setFruta}
      />

      <Checkbox
        options={['Termos e Condições']}
        value={termos}
        setValue={setTermos}
      />

    </div>
  );
}

export default Exemplo1
