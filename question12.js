const prompt = require("prompt-sync")();
let c = parseInt(prompt("Enter the  temperature"));
let f= (9/5*c)+32; 
console.log(f);