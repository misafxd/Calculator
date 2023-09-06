function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b ;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    if(b==0){
        return "ERROR"
    }else {
        return a/b;
    }
}

function operate(op, num1, num2){
   switch(op){
    case '+': add(num1,num2);
    break;
    case '-': subtract(num1,num2);
    break;
    case '/': divide(num1,num2);
    break;
    case '*': multiply(num1,num2);
    break;
   }
}

let num1;
let num2;
let op;