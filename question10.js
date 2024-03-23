const prompt = require("prompt-sync")();
let a = parseInt(prompt("Enter the  number"));
if(a%2==0){
    console.log("even =",a);
}
else{
    console.log("odd =",a);
}