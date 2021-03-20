const display = document.querySelector(".display")
const displayHistory = document.querySelector(".history")
const numberButtons = document.querySelectorAll('.number')
const mathButtons = document.querySelectorAll('.maths')
const returnButton = document.querySelector('.equal')
const clearButton = document.querySelector('#clear')
const clearAllButton = document.querySelector('#clearAll')
const memoryButton = document.querySelector('#memory')
const memoryClearButton = document.querySelector('#memoryClear')
let values = [];
let mathFunc = [];
let history = [];
let result = [];
let mem = [];

numberButtons.forEach(button => button.addEventListener("click", function(e){displayNumbers(e)}));
mathButtons.forEach(button => button.addEventListener("click", function(e){mathFunctions(e)}));

returnButton.addEventListener("click", returnResult);
clearButton.addEventListener("click", clearDisplay);
clearAllButton.addEventListener("click", clearAll);
memoryButton.addEventListener("click", memorySwitch);
memoryClearButton.addEventListener("click", clearMemory);

function displayNumbers(e) {
    if (result.length == 0) {
        return display.textContent += e.target.textContent;
    }else{
        result = [];
        return display.textContent = e.target.textContent;
    }
}

function mathFunctions(e) {
    if (display.textContent == "") {
        updateOperator(e);
    }else if (values.length == 0) {
        storeValue(e);
    }else if (result.length == 0 ) {
        getResult(e) ;
    }else{
        storeResult(e);
    }
}

function storeValue(e) {
    values = [display.textContent];
    mathFunc = e.target.id;
    operator = e.target.textContent
    displayHistory.textContent = display.textContent + operator;
    display.textContent = "";
}

function updateOperator(e) {
    mathFunc = e.target.id;
    operator = e.target.textContent;
    values = result;
    displayHistory.textContent = result + operator;
    display.textContent = "";
}

function getResult(e) {
    values[1] = display.textContent;
    result = operationResult();
    values = result;
    mathFunc = e.target.id;
    operator = e.target.textContent

    displayHistory.textContent = result + operator;
    display.textContent = result;
} 

function storeResult(e) {
    mathFunc = e.target.id;
    operator = e.target.textContent

    displayHistory.textContent = result;
    displayHistory.textContent += operator;
    values = result
    result = [];
    display.textContent = "";
}

function operationResult() {
    if (values[0] == "") {values[0] = 0}
    if (values[1] == "") {values[1] = 0}
    switch (mathFunc) {
        case "multiply":
            return [parseFloat(values[0]) * parseFloat(values[1])];
            
        case "divide":
            return [parseFloat(values[0]) / parseFloat(values[1])];
            
        case "add":
            return [parseFloat(values[0]) + parseFloat(values[1])];
            
        case "subtract":
            return [parseFloat(values[0]) - parseFloat(values[1])];
    }
}

function returnResult(e) {
    values.push(display.textContent);
    result = operationResult();
    mathFunc = e.target.id;
    operator = e.target.textContent

    displayHistory.textContent = result;
    display.textContent = result;
}
   
function updateDisplay(result) {
    display.textContent = result;
}

function clearDisplay() {
   return display.textContent = "";
}

function clearAll() {
    result = [];
    values = [];
    mathFunc = [];
    mem = [];
    display.textContent = "";
    displayHistory.textContent = "";
}

function memorySwitch() {
    if (mem.length == 0) {
        return setMemory();
    }else{
        return displayMemory();
    }
}

function setMemory() {
    mem = [display.textContent]
    displayHistory.textContent = "";
    return display.textContent = "";
}
function displayMemory() {
    return display.textContent = mem
}
function clearMemory() {
    return mem = []
}