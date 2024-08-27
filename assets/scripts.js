
let numbers = document.getElementsByClassName('btn-number');
const operator_signs = ['+', '-', '*', '/', '%', '÷', '×'];

let operators = document.getElementsByClassName('btn-operator');
let expressionBox = document.getElementById("expression");
let resultBox = document.getElementById("result");


for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", function(){
        numberClicked(numbers[i].innerText);
    });
   
}

function numberClicked(number){

    if(expressionBox.innerText == '' && number == 0){
        return;
    }

    expressionBox.innerText += number;
    // console.log(expressionBox.innerText);

    newResult = eval(expressionBox.innerText.replaceAll("÷", "/").replaceAll('×', '*'));
    resultBox.innerText = parseFloat(newResult);
}

for (let i = 0; i < operators.length; i++) {

    operators[i].addEventListener("click", function(){
        operatorClicked(operators[i].innerText);
    });
   
}

function operatorClicked(operator){

    if(expressionBox.innerText == ''){
        return;
    }else{
        // expressionInput = expressionBox.innerText;
        expression = evaluateExpression(expressionBox.innerText, operator);
        expressionBox.innerText = expression;
        // console.log(expression);
        // oldResult = eval(expression);
        // resultBox.innerText = oldResult;
    }

    // expressionBox.innerText += operator;
    
}

function evaluateExpression(expression, newOperator){

    expression = expression.replaceAll("÷", "/").replaceAll('×', '*');

    if(operator_signs.includes(expression.slice(-1))){
        expression = expression.slice(0, -1);
    }

    expression += newOperator;
    
    return expression;
    
}

function trimLastOperator(expression){
    
    if(operator_signs.includes(expression.slice(-1))){
        expression = expression.slice(0, -1);
    }

    return expression;
}