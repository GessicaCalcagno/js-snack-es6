#### Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal.

- [X] 1. Creo array di bici con nome e peso;
- [X] 2. Dichiaro la variabile d'appoggio/Flag:
         - [X] biciMinore [inserisco indice a piacere];
    - Se il peso della bici è minore del peso bici indicata dalla variabile d'appoggio:
            bicimirore = bici;
   (bici è il nome della variabile che rappresenta ogni singolo elemento dell'array biciclette durante l'iterazione attraverso il metodo forEach.)
___________________________________________


#### Snack2
1. Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
2. Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.

3. Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

### Snack Bonus
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
Usiamo i nuovi metodi degli array foreach o filter.

#### Snack 4
Crea un array composto da 4 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.

- Creo l'array
- Uso il metodo Filter: 
    - dichiaro 3 variabili per 3 array diversi.
     - 1. inserisco la condizione se l'alimentazione è a benzina crea array solo con queste macchine.
     - 2. inserisco la condizione se l'alimentazione è a disel crea array solo con queste macchine.
     - 3. inserisco la condizione se l'alimentazione per inserire tutto il resto.

- stampo in console le 3 variabili.

### Snack 5
Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un’età.
Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.

- Creo l'array di persone
- scorro l'array ed inserisco la condizione:
    - se ha un età compresa tra i 18 e i 70 anni: può guidare;
        altrimenti: non può guidare

- stampo in console.log