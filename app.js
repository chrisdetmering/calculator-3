const display = document.querySelector(".display");
const displayHistory = document.querySelector(".history");

let numOne = ''; 
let numTwo = ''; 
let operator = null;

document.querySelectorAll('.number')
.forEach(button => button.addEventListener("click", handleNumbersClick));

document.querySelectorAll('.maths')
.forEach(button => button.addEventListener("click", handleOperatorsClick));

document.querySelector('.equal')
.addEventListener("click", handleEqualsClick);

document.querySelector('#clearAll')
.addEventListener("click", clearAll);

//test 
function handleNumbersClick(e) { 
    if (display.textContent === 10) {return}

    if (!operator) { 
        numOne += e.target.textContent;
        display.textContent = numOne; 
        displayHistory.textContent = numOne
        return; 
    } 

    if (operator) { 
        numTwo += e.target.textContent;
        display.textContent = numTwo; 
        displayHistory.textContent += numTwo;
        return; 
    }

}

function handleOperatorsClick(e) { 
    if (numOne) { 
        operator = e.target.textContent; 
        displayHistory.textContent += ` ${operator} `; 
    }
}

function handleEqualsClick() { 
    if (numOne && operator && numTwo) { 
        const answer = calculate(); 
        numOne = answer; 
        numTwo = ''; 
        display.textContent = answer; 
        displayHistory.textContent = answer; 
    }
}

function calculate() {
    switch (operator) {
        case "*":
            return `${parseFloat(numOne) * parseFloat(numTwo)}`;
            
        case "/":
            return `${parseFloat(numOne) / parseFloat(numTwo)}`;
            
        case "+":
            return `${parseFloat(numOne) + parseFloat(numTwo)}`;
            
        case "-":
            return `${parseFloat(numOne) - parseFloat(numTwo)}`;
    }
}


function clearDisplay() {
   return display.textContent = "";
}

function clearAll() {
    numOne = ''; 
    numTwo = ''; 
    operator = null;
    display.textContent = "";
    displayHistory.textContent = "";
}

