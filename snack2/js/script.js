// TEST
//alert('ciao')

//************************************************ */
// Lo usiamo come controllo alla fine se c'è qualche problema di sintassi!
//"use strict";
//**************************************************** */

const squadreCalcio = [
  { nome: "Juventus", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Inter", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Milan", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Roma", puntiFatti: 0, falliSubiti: 0 },
];

console.log(...squadreCalcio);

//________Pure Function__________
//Creo la funzione di numeri casuali
function randomNumb(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
//______________________

//function aggiornaPuntiEFalli() {
  squadreCalcio.forEach((squadra) => {
    squadra.puntiFatti = randomNumb(0, 100);
    squadra.falliSubiti = randomNumb(0, 50);
  });
 
// }

// aggiornaPuntiEFalli()
console.log(squadreCalcio);

// const newArray = squadreCalcio.map((squadra) => {
//   console.log(squadra);
//   return { nome: squadra.nome, falliSubiti: squadra.falliSubiti}
// });

// console.log(newArray);
// squadreCalcio.filter(squadra => squadra.puntiFatti > 40)

// Creazione di un nuovo array contenente solo nomi e falli subiti
const squadreConFalliSubiti = squadreCalcio.map(({ nome, falliSubiti }) => ({ nome, falliSubiti }));

// Stampo in console
console.log("Squadre con nomi e falli subiti:");
console.log(squadreConFalliSubiti);