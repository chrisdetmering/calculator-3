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

numberButtons.forEach(button => button.addEventListener("click", function(e){displayNumbers(e)
}));

mathButtons.forEach(button => button.addEventListener("click", function(e){getFirstNumber(e)}));

returnButton.addEventListener("click", getResult)

clearButton.addEventListener("click", clearDisplay)
clearAllButton.addEventListener("click", clearAll)
memoryButton.addEventListener("click", memorySwitch)
memoryClearButton.addEventListener("click", clearMemory)

function displayNumbers(e) {
    if (result.length == 0) {
        return display.textContent += e.target.textContent;
    }else{
        values = [result]
        result = [];
        return display.textContent = e.target.textContent;
    }
}

function getFirstNumber(e) {
    values = [display.textContent];
    mathFunc = e.target.id;
    operator = e.target.textContent
    displayHistory.textContent = display.textContent + operator;
    display.textContent = "";
    
}

function getResult() {
    values.push(display.textContent);
    if (values[0] == "") {values[0] = 0}
    if (values[1] == "") {values[1] = 0}
    if (result.length == 0) {
        displayHistory.textContent += display.textContent;
        switch (mathFunc) {
            case "multiply":
                result = parseFloat(values[0]) * parseFloat(values[1]);
            return updateDisplay(result);
            case "divide":
                result = parseFloat(values[0]) / parseFloat(values[1]);
            return updateDisplay(result);
            case "add":
                result = parseFloat(values[0]) + parseFloat(values[1]);
            return updateDisplay(result);
            case "subtract":
                result = parseFloat(values[0]) -parseFloat(values[1]);
            return updateDisplay(result);
        }
    }else{
        displayHistory.textContent = result+operator+values[1];
        switch (mathFunc) {
            case "multiply":
                result = result * parseFloat(values[1]);
            return updateDisplay(result);
            case "divide":
                result = result / parseFloat(values[1]);
            return updateDisplay(result);
            case "add":
                result = result + parseFloat(values[1]);
            return updateDisplay(result)
            case "subtract":
                result = result - parseFloat(values[1]);
            return updateDisplay(result);
        }
    }
}
function updateDisplay(result) {
    display.textContent = result;
}
function clearDisplay() {
    displayHistory.textContent = display.textContent;
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
    return mem = [display.textContent]
}
function displayMemory() {
    return display.textContent = mem
}
function clearMemory() {
    return mem = []
}