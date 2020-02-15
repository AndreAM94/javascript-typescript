var add = require("./lib/sum")
var curry = require("./lib/curry");

console.log(add.uncurriedSum(2, 3, 5)); // result 10
console.log(add.curriedSum3(2)(3)(5));  // result 10

// curries the uncurriedSum function
console.log(curry.curry(add.uncurriedSum)(2)(3)(5)) // result 10