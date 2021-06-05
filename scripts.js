const addition = document.getElementById("add");
const subtraction = document.getElementById("subtract");
const multiplication = document.getElementById("multiply");
const division = document.getElementById("divide");
const squareRoot = document.getElementById("sqrt");
const percentage = document.getElementById("percentage");
const buttons = document.querySelectorAll("button");
const expression = document.getElementById("expression");



let operator;
let num1;
let num2;
let operatorsClicked = 0;
let equation;
//adds listeners to all buttons
//TODO: work out logic to only solve two numbers at a time and use answer if another operator is pressed
for (const btn of buttons){
    btn.addEventListener("click", function() {
        expression.innerHTML += (this.innerHTML); //displays buttons pressed

        if (btn.classList == 'operator'){
            operatorsClicked += 1;
            if(operatorsClicked > 1){
                let problem = expression.innerHTML.split(" ");
                console.log(problem);

            }
/*             else {
                expression.innerHTML += (this.innerHTML); //displays buttons pressed
            } */
        }
/*         else{
            expression.innerHTML += (this.innerHTML); //displays buttons pressed

        } */
    });
}





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

//function to take an operator and 2 numbers to call functions
function operate(operator, num1, num2){
    switch (operator){
        case 'add':
            return add(num1,num2);
            break;
        case 'subtract':
            return subtract(num1,num2);
            break;
        case 'multiply':
            return multiply(num1,num2);
            break;
        case 'divide':
            return divide(num1,num2);
            break;
    }
};