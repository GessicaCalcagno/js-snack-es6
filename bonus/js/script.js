// TEST
//alert('ciao')

//************************************************ */
// Lo usiamo come controllo alla fine se c'è qualche problema di sintassi!
//"use strict";
//**************************************************** */

// Esempio di array
const array = [11, 25, 34, 43, 59, 61, 70];
const a = 2;
const b = 5;

function curValue(array, a, b) {
  // Controllo che a sia minore di b e che b sia minore della lunghezza dell'array
  //Condizione che ritorna true o false
  if (a >= b || b >= array.length) {
    return [];
  }
  //Solo se supera la conzione va nell'array
  const result = array.filter((valore,indice) => indice >= a && indice <=b);
  return result
}

const result = curValue(array, a, b);
console.log("Array con valori compresi tra", a, "e", b + ":", result);
