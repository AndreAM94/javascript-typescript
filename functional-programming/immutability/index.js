var fakeArray = require("./lib/utils").fakeArray
var immutable = require("immutable")

// Le stringhe sono immutabili
var greeting = "Hello Andrea!"
var subGreeting = greeting.substr(6) // crea una nuova stringa a partire da quella iniziale
console.log(greeting)
console.log(subGreeting)

// const utilizzato con un primitivo lo rende una vera costante
const NUMBER = 5
try {
    NUMBER = 6
} catch (e) {
    console.log("Il valore in caso di primitivi non è modificabile")
}

// const utilizzato con un oggetto non lo rende una vere costante
const DOG = { name: "Puppy", age: 7 }
try {
    DOG = { name: "Lucky", age: 1 }
} catch (e) {
    console.log("Nel caso degli oggetti const definisce che DOG è un namespace non riassegnabile")
}

// Ma posso cambiare le proprietà al suo interno
console.log(DOG) // { name: 'Puppy', age: 7 }
DOG.name = "Bobby"
console.log(DOG) // { name: 'Bobby', age: 7 }

// Object.freeze rende immutabile un oggetto solo superficialmente
const CAT = { name: "Lucy", age: 7, features: ["jump", "meaow"] }
Object.freeze(CAT)
console.log(CAT) // { name: 'Lucy', age: 7, features: [ 'jump', 'meaow' ] }

CAT.age = 89
console.log(CAT) // { name: 'Lucy', age: 7, features: [ 'jump', 'meaow' ] }
// essendo immutabile age non ha cambiato valore

CAT.features.push("Sleep")
console.log(CAT) // { name: 'Lucy', age: 7, features: [ 'jump', 'meaow', 'Sleep' ] }
// Essendo immutabile superficialmente l'array features è cambiato

// Immutable js
var array1 = fakeArray(100)
var array2 = immutable.List(array1)

console.dir(array1);
console.dir(array2)
