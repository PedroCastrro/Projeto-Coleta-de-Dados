import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';

import '../styles/Global.css';

export function Home () {
        const [name, setName] = useState("");
        const [card, setCard] = useState("");
        const [Date, setDate] = useState("");
        const [codigo, setCodigo] = useState("");
    
      const handleSubmit = (event) => {
        event.preventDefault();
        alert(`insira seu nome: ${name}`);
        alert(`insira o numero do seu cartao: ${card}`);
        alert(`insira o vencimento do seu cartão: ${Date}`);
        alert(`insira o codigo de segurança do seu cartão: ${codigo}`);
      }
    
      return (
        <form id='form1' onSubmit={handleSubmit}>
          <label id='name'>CardHolderName:
            <input 
              type="text"
              id='cardHolder'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
    
          <label id='numberCard'>Card Number:
          <input 
            type="number"
            id='cardNumber'
            value={card}
            onChange={ (e) => setCard(e.targer.value)}
            />
          </label>
    
          <label id='date'>Exp.Date (MM/YYYY):
            <input 
            type="number"
            id='date1'
            value={Date}
            onChange={ (e) => setDate(e.targer.value)}
            />

            <input 
            type="number"
            id='date2'
            value={Date}
            onChange={ (e) => setDate(e.targer.value)}
            />

            </label>

            <label id='cvc'>CVC
            <input
            type="number"
            id='cdg'
            value={codigo}
            onChange= { (e) => setCodigo(e.target.value)}
            />
            </label>
          
          <input id='button' type="submit" />
        </form>
    )
}