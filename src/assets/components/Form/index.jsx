import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';


import './styles.css';

export function Form () {
    const [name, setName] = useState("");
    const [card, setCard] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`insira seu nome: ${name}`);
    alert(`insira o numero do seu cartao: ${card}`);
    alert(`insira o vencimento do seu cartão: ${Date}`);
    alert(`insira o codigo de segurança do seu cartão: ${codigo}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>CardHolderName:
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <label>Card Number:
      <input 
        type="number"
        value={card}
        onChange={ (e) => setCard(e.targer.value)}
        />
      </label>

      <label>Exp.Date (MM/YYYY):
        <input 
        type="number"
        value={Date}
        onChange={ (e) => setDate(e.targer.value)}
        />

        <input 
        type="number"
        value={Date}
        onChange={ (e) => setDate(e.targer.value)}
        />
      </label>

      <label>CVC:
        <input 
        type="number" 
        value={codigo}
        onChange= { (e) => setCodigo(e.target.value)}
        />
      </label>

      <input type="submit" />
    </form>
  )
}