import React from "react";
import Input from "./Form/Input";
import useForm from "./Hooks/useForm";

function App() {
  const cep = useForm("cep");
  const email = useForm("email");
  const nome = useForm();
  const sobrenome = useForm(false);

  function handleSubmit(event) {
    event.preventDefault();
    if (cep.validate() && email.validate() && nome.validate()) {
      console.log("Enviar");
    } else {
      console.log("Não enviar");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Nome"
        id="nome"
        type="text"
        placeholder="Seu nome"
        {...nome}
      />
      <br/>
      <Input
        label="Sobrenome"
        id="sobrenome"
        type="text"
        placeholder="Seu sobrenome"
        {...sobrenome}
      />
      <br/>
      <Input
        label="CEP"
        id="cep"
        type="text"
        placeholder="00000-000"
        {...cep}
      />
      <br/>
      <Input
        label="Email"
        id="email"
        type="email"
        placeholder="seuemail@hotmail.com.br"
        {...email}
      />
      <button style={{ margin: ".5rem 0rem 0rem 0rem" }}>Enviar</button>
    </form>
  );
}

export default App;
