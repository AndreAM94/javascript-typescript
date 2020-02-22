var add = require("./lib/sum")
var curry = require("./lib/curry").curry;
var uncurriedSum = add.uncurriedSum;
var curriedSum3 = add.curriedSum3;

// uncurriedSum è una funzione di arietà 3 che somma i 3 numeri in input
console.log(uncurriedSum(2, 3, 5));

// curriedSum3 è una funzione di arietà 1 che restituisce un'altra funzione di arietà 1
// che restituisce la somma dei tre valori; è la versione curried della precedente funzione
// Ovvero: curriedSum3(2) = funzione1, funzione1(3) = funzione2, funzione2(5) = risultato
console.log(curriedSum3(2)(3)(5));

// la funzione curry permette di trasformare una funzione non curried in una che lo è
console.log(curry(uncurriedSum)(2)(3)(5));

// è possibile creare un'applicazione parziale della funzione somma, ad esempio una funzione che aggiunge sempre 10
var addTen = curry(uncurriedSum)(10);
console.log(addTen(5)(7))