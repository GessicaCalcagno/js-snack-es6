// TEST
//alert('ciao')

//************************************************ */
// Lo usiamo come controllo alla fine se c'è qualche problema di sintassi!
//"use strict";
//**************************************************** */

const persone = [
  { nome: "Mario", cognome: "Rossi", eta: 25 },
  { nome: "Anna", cognome: "Bianchi", eta: 17 },
  { nome: "Luca", cognome: "Verdi", eta: 35 },
  { nome: "Giulia", cognome: "Neri", eta: 16 },
  { nome: "Pippo", cognome: "Boh", eta: 72 },
];

persone.forEach((curPerson) => {
  if (curPerson.eta >= 18 && curPerson.eta <= 70) {
    console.log(`${curPerson.nome} ${curPerson.cognome} può guidare.`);
  } else {
    console.log(`${curPerson.nome} ${curPerson.cognome} non può guidare.`);
  }
});
