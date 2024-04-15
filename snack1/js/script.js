// TEST
//alert('ciao')

//************************************************ */
// Lo usiamo come controllo alla fine se c'è qualche problema di sintassi!
//"use strict";
//**************************************************** */

// Creazione dell'array di oggetti bici con il metodo destructuring
const biciclette = [
  { nome: "Bici1", peso: 8 },
  { nome: "Bici2", peso: 7 },
  { nome: "Bici3", peso: 9 },
  { nome: "Bici4", peso: 7.5 },
];

console.log(biciclette);

let biciMinore = biciclette[0];
console.log(biciMinore);

// for (let i = 0; i < biciclette.length; i++) {
//   console.log(biciclette[i]);
//   if (biciclette[i].peso < biciMinore.peso) {
//     //console.log(biciclette[i].peso, biciMinore.peso);
//     biciMinore = biciclette[i];
//   }
//   //console.log(biciMinore);
// }
// console.log(biciMinore);
// _______________________

biciclette.forEach((bici) => {
  if (bici.peso < biciMinore.peso) {
    biciMinore = bici;
  }
  //Se lo scrivo qui fa il controllo 4 volte
  //console.log(biciMinore);
});
console.log(biciMinore);
console.log(
  `La bici più leggera è ${biciMinore.nome} con un peso di ${biciMinore.peso} kg.`
);
//_________PROVO A TROVARE ANCHE LA BICI COL PESO MAGGIORE___

let biciMaggiore = biciclette[3];
console.log(biciMaggiore);
biciclette.forEach((bici) => {
  if (bici.peso > biciMaggiore.peso) {
    biciMaggiore = bici;
  }
});
console.log(biciMaggiore);
console.log(
    `La bici più pesante è ${biciMaggiore.nome} con un peso di ${biciMaggiore.peso} kg.`
  );
//_______________________________
