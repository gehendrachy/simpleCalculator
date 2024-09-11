
let numbers = document.getElementsByClassName('btn-number');
const operatorSigns = ['+', '-', '*', '/', '%', '÷', '×'];

let operators = document.getElementsByClassName('btn-operator');
let allClearBtn = document.getElementById("btn-all-clear");
let dotBtn = document.getElementById("btn-dot");

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
        evaluatedExpression = evaluateExpression(expressionBox.innerText);
        evaluatedExpression += operator;
        expressionBox.innerText = evaluatedExpression;
        // console.log(expression);
        // oldResult = eval(expression);
        // resultBox.innerText = oldResult;
    }
    
    // expressionBox.innerText += operator;
    
}

function evaluateExpression(expression){
    
    expression = expression.replaceAll("÷", "/").replaceAll('×', '*');
    lastCharacter = expression.slice(-1);
    
    if(operatorSigns.includes(lastCharacter)){
        expression = expression.slice(0, -1);
    }
    
    return expression;
    
}

allClearBtn.addEventListener("click", function(){
    expressionBox.innerText = '';
    resultBox.innerText = '0';
});

dotBtn.addEventListener("click", function(){
    
    hasDot = checkLastNumber(expressionBox.innerText);
    
});

function checkLastNumber(expression){
    
    let lastOperator = {
        index: 0,
        symbol: ","
    };
    
    for(operatorSign of operatorSigns){
        currentOperatorIndex = expression.lastIndexOf(operatorSign);
        
        if(currentOperatorIndex > lastOperator.index){
            lastOperator.index = currentOperatorIndex;
            lastOperator.symbol = operatorSign;
        }
    }
    
    expressionArray = expression.split(lastOperator.symbol);
    lastNumber = expressionArray[expressionArray.length - 1];
    console.log(lastOperator);
    
    if(!lastNumber.includes(".")){
        expressionBox.innerText += ".";
    }
}