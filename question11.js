const prompt = require("prompt-sync")();
let a = parseInt(prompt("Enter the  number"));
let i=1;
let count = 0;
while(i<=a){
    if(a%i==0){
        count=count +1;
    }
    i=i+1;
}
if(count == 2){
    console.log("Prime Number =",a);
}
else{
    console.log("Not Prime Number",a);
}