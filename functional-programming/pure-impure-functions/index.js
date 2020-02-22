var impureArrayAdd = require("./lib/utils").impureArrayAdd;
var pureArrayAdd = require("./lib/utils").pureArrayAdd;

var log = console.log;

// Un esempio classico di funzione impura è la funzione Math.random() il cui output non è predicibile
log(Math.random());
log(Math.random());
log(Math.random());

// Oppure una funzione che modifica lo stato di un elemento al di fuori del suo scope
// l'array dogs viene modificato direttamente dalla funzione

var dogs = [];
log(impureArrayAdd(dogs, "Puppy", 7)); // [ { name: 'Puppy', age: 7 } ]
log(dogs) // [ { name: 'Puppy', age: 7 } ]

// La versione pura non modifichere lo stato di un elemento al di fuori del suo scope
// per cui l'array dogs resta vuoto e pureArrayAdd restituisce una copia dell'array dogs
// contente l'elemento che ho aggiunto

dogs = [];
log(pureArrayAdd(dogs, "Lucky", 1)) // [ { name: 'Lucky', age: 1 } ]
log(dogs) // []
