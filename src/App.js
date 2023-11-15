import React from 'react';
import './App.css';
import GameBoard from './components/GameBoard';

function App() {
  const questions = [
    "BIT", "BYTE", "ASCII", "API",
    "TCP", "DNS", "ISP", "BACKBONE",
    "HTTP", "IAAS", "PAAS", "SAAS",
    "AVAILABILITY", "RESILIENCE", "SCALING", "PAY-AS-YOU-GO"
  ];
  const answers = [
    "0/1", "8 byte (2^8 val)", "256 caratteri e simboli", "Application program interface",
    "protocollo pacchetti spedizione garantita", "server che traduce nomi in indirizzi IP", "Internet Service Provider", "Rete portante di internet",
    "protocollo richiesta risorsa GET/POST 200", "Infrastructure", "Platform", "Software",
    "Tempo di uptime di un sito", "tempo di un sito per rialzarsi", "capacità di un sito per reggere carico e traffico", "paghi solo quello che consumi"
  ];



  return (
    <div className="App">
      <GameBoard answers={answers} questions={questions} />
    </div>
  );
}

export default App;