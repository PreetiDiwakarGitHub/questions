const prompt = require("prompt-sync")();
let a = parseInt(prompt("Enter the first number"));
let b = parseInt(prompt("Enter the second number"));
let c = a/b;
let d = c - parseInt(a/b);
console.log(d);