const prompt = require("prompt-sync")();
let a = parseInt(prompt("Enter the first number"));
let b = parseInt(prompt("Enter the second number"));
console.log("sum",a+b);
console.log("difference",a-b);
console.log("Product",a*b);
console.log("Quotient",a/b);
console.log("Modulus",a%b);