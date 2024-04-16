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

// persone.forEach((curPerson) => {
//   if (curPerson.eta >= 18 && curPerson.eta <= 70) {
//     console.log(`${curPerson.nome} ${curPerson.cognome} può guidare.`);
//   } else {
//     console.log(`${curPerson.nome} ${curPerson.cognome} non può guidare.`);
//   }
// });

//Usare Map. è più idoneo
const okToDrive  = persone.map(persona =>{
  if (persona.eta  >= 18 && persona.eta <= 70){
    return `${persona.nome} ${persona.cognome} può guidare.`
  } else {
    console.log(`${persona.nome} ${persona.cognome} non può guidare.`);
  }

});
