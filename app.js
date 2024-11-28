// require("./xyz")
require("./difference")
const {y, calculateDifference} = require("./difference");
// const {x, calculateSum} = require("./Calculate/sum")

const {calculateSum, calculateMultiplication} = require("./Calculate")

var name = "Namaste NodeJS";

var a = 10;
var b = 20;

// console.log(name)
// console.log(a+b);
// console.log(global)
// console.log(this); 'this' is an empty object in node js as it is specifically uses in browser
// console.log(globalThis);

// console.log(globalThis === global)

// obj.calculateSum(a,b);
// console.log(obj.x);
calculateSum(a,b);
calculateDifference(a,b);
calculateMultiplication(a,b);