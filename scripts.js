
//DOM constants
const addition = document.getElementById("add");
const subtraction = document.getElementById("subtract");
const multiplication = document.getElementById("multiply");
const division = document.getElementById("divide");
const squareRoot = document.getElementById("sqrt");
const percentage = document.getElementById("percentage");
const buttons = document.querySelectorAll("button");
const expression = document.getElementById("expression");

//varibles
let equation;
let operator;
let num1;
let num2;
let answer;
let operatorsClicked = 0;


//adds listeners to all buttons and sets up for answers
for (const btn of buttons){
    btn.addEventListener("click", function() {
        if (btn.id == 'sqrt'){
            equation = expression.innerHTML.split(" ");
            num1 = parseInt(equation[0]);
            expression.innerHTML = (sqrt(num1).toFixed(4));
        }
        else if (btn.id == 'equals'){
            equation = expression.innerHTML.split(" ");
            num1 = parseInt(equation[0]);
            operator = equation[1];
            num2 = parseInt(equation[2]);
            answer = operate(operator, num1, num2);
            expression.innerHTML = (answer);
            operatorsClicked = 0;
        }
        else if (btn.classList == 'operator'){
            if(operatorsClicked > 0){
                equation = expression.innerHTML.split(" ");
                console.log(equation);
                num1 = parseInt(equation[0]);
                operator = equation[1];
                num2 = parseInt(equation[2]);
                answer = operate(operator, num1, num2);
                console.log(answer);
                expression.innerHTML = (answer) + (this.innerHTML);
            }
            else{
                operatorsClicked = 1;
                expression.innerHTML += (this.innerHTML);
            }
        }
        else{
            expression.innerHTML += (this.innerHTML);
        }
    });
};

//math functions
function add(num1, num2){
    return (num1 + num2);
};
function subtract(num1, num2){
    return (num1 - num2);
};
function multiply(num1, num2){
    return (num1 * num2);
};
function divide(num1, num2){
    return (num1/num2);
}
function sqrt(num1){
    return Math.sqrt(num1);
}

//function to take an operator and 2 numbers to call functions
function operate(operator, num1, num2){
    switch (operator){
        case '+':
            return add(num1,num2);
            break;
        case '-':
            return subtract(num1,num2);
            break;
        case '×': //alt code 0215 to match entity code in html
            return multiply(num1,num2);
            break;
        case '÷': //alt code 0247 to match entity code in html
            return divide(num1,num2);
            break;
        case '%':
            return;
            break;
        
    }
};