var act = require('./../lib/high-order-functions').act;
var jump = require('./../lib/high-order-functions').jump;
var run = require('./../lib/high-order-functions').run;

// E' possibile passare in input o ricevere in output funzioni che in javascript sono trattati come oggetti
// In questo caso passiamo le funzioni jump e run
console.log(act("hole", jump, run)) // Jump

// Scriviamo una funzione che raddoppia il valore degli elementi in un array inserendoli in un secondo array
// Non usando funzioni di ordine superiore
var arr1 = [1, 5, 10]
var arr2 = []

for (let i = 0; i < arr1.length; i++) {
    arr2.push(arr1[i] * 2)
}
console.log(arr2) // [ 2, 10, 20 ]

// Sfruttando la funzione built-in Array.map (che è una funzione di ordine superiore) otteniamo un codice più snello e leggibile
var arr1 = [1, 5, 10]
var arr2 = arr1.map(function(value) {
    return value * 2;
})
console.log(arr2) // [ 2, 10, 20 ]

// O in maniera più coincisa usando le funzioni a freccia

var arr1 = [1, 5, 10]
var arr2 = arr1.map(value => value * 2);
console.log(arr2) // [ 2, 10, 20 ]
