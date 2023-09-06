const num = document.querySelectorAll('.btn.num');
const operator = document.querySelectorAll('.btn.op');
const display = document.querySelector('.display-value');
const clear = document.querySelector('.btn.clear');
const undo = document.querySelector('.btn.undo');

let num1;
let num2='';
let op;
let result;

function add(a,b){
    return +a + +b;
}

function subtract(a,b){
    return +a - +b ;
}

function multiply(a,b){
    return +a * +b;
}

function divide(a,b){
    if(+b == 0){
        return "ERROR"
    }else {
        return +a / +b;
    }
}

function operate(op, num1, num2){
    let operationResult;
   switch(op){
    case '+': operationResult = add(num1,num2);
    break;
    case '-': operationResult = subtract(num1,num2);
    break;
    case '/': operationResult = divide(num1,num2);
    break;
    case '*': operationResult = multiply(num1,num2);
    break;
   }
   return operationResult;
}

function cleanVars (){
    display.textContent = ''
    num1 = '';
    num2 = '';
    op = '';
}

num.forEach(button => {
    button.addEventListener('click', () => {
        if(!num1){
            display.textContent += button.textContent;
        } else{
            num2 += button.textContent;
            display.textContent = num2;
        }
    })
})

operator.forEach(button => {
    button.addEventListener('click', () => {
        if(!num1){
            if(button.textContent == '-'){
                display.textContent += button.textContent;
            } else{
                op= button.textContent;
                num1= display.textContent;
            }
        } else if(num1 && num2 || op == '='){
            result = operate(op,num1,num2);
                num1 = result;
                display.textContent = result.toFixed(2);
                num2 = ''
        } else if(op != '='){
                op = button.textContent;
        }
         if (num1 == 'ERROR'){
            setTimeout(()=>{
                cleanVars();
            },500)
        }
    })
})

clear.addEventListener('click', () => {
    cleanVars();
});

undo.addEventListener('click', () => {
    display.textContent = display.textContent.slice(0,display.textContent.length-1);
    if(num1){   
        num2 = display.textContent;
    }
})
