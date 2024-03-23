const prompt = require("prompt-sync")();
let a = parseInt(prompt("Enter the first number"));
let b = parseInt(prompt("Enter the second number"));
let c = parseInt(prompt("Enter the third number"));
if(a>b){
    if(a>c){
        console.log(a);
    }
    else{
        console.log(c);
    }
}
else if(b>c){
    console.log(b);
}
else{
    console.log(c);
}