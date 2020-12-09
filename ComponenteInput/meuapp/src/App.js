import React from "react";
import Checkbox from "./Form/Checkbox";
import Input from "./Form/Input";
import Radio from "./Form/Radio";
import Select from "./Form/Select";

function App() {
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [produto, setProduto] = React.useState("");
  const [cor, setCor] = React.useState('');
  const [fruta, setFruta] = React.useState([]);
  const [termos, setTermos] = React.useState([]);
  
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

export default App;
