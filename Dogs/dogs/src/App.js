/* eslint-disable array-callback-return */
import React from "react";
import Footer from "./Footer";
import Form from "./Form/Form";
import Header from './Header'

const Teste = () => {
  const active = false;
  if (active) {
    return <p>teste</p>
  } else {
    return null
  }
}


const App = () => {
  return (
    <>
      <Teste />
      <Header />
      <Form />
      <Footer />
    </>
  );
};

export default App;
