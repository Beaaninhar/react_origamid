import React from "react";
import styles from "./Contato.module.css";
import Head from './Head'
import foto from "../img/contato.jpg";

const Contato = () => {
  return (
    <section className={styles.contato + ' animeLeft'}>
      <Head title="Ranek | Contato" description="Entre em contato" />
      <img src={foto} alt="Máquina de escrever" />
      <div className={styles.dado}>
        <h1>Entre em contato</h1>
        <ul>
          <li>aninhabeatrizribeiro@gmail.com</li>
          <li>(44) 99805-1761</li>
          <li>Rua Núemro 0, 000</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
