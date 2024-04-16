// TEST
//alert('ciao')

//************************************************ */
// Lo usiamo come controllo alla fine se c'è qualche problema di sintassi!
//"use strict";
//**************************************************** */

const automobili = [
  { marca: "Toyota", modello: "Yaris", alimentazione: "ibrida" },
  { marca: "Volkswagen", modello: "Golf", alimentazione: "benzina" },
  { marca: "BMW", modello: "i3", alimentazione: "elettrico" },
  { marca: "Fiat", modello: "Panda", alimentazione: "metano" },
  { marca: "Renault", modello: "Clio", alimentazione: "diesel" },
  { marca: "Tesla", modello: "Model S", alimentazione: "elettrico" },
  { marca: "Ford", modello: "Focus", alimentazione: "benzina" },
  { marca: "Audi", modello: "A3", alimentazione: "diesel" },
  { marca: "Mercedes-Benz", modello: "EQC", alimentazione: "elettrico" },
  { marca: "Opel", modello: "Corsa", alimentazione: "gpl" },
];

let benzina = [];
let disel = [];
let altro = [];

benzina = automobili.filter((curAuto) => {
  if (curAuto.alimentazione === "benzina") {
    return true;
  } else {
    return false;
  }
});

console.log(benzina);

disel = automobili.filter((curAuto) => {
  if (curAuto.alimentazione === "diesel") {
    return true;
  } else {
    return false;
  }
});

console.log(disel);

altro = automobili.filter((curAuto) => {
  if (
    curAuto.alimentazione !== "benzina" &&
    curAuto.alimentazione !== "diesel"
  ) {
    return true;
  } else {
    return false;
  }
});

console.log(altro);
