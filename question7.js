const prompt = require("prompt-sync")();
let a = parseInt(prompt("Enter the number"));
let b = a%10;
console.log("Last digit",b);
