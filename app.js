const display = document.querySelector(".display")
const numberButtons = document.querySelectorAll('.number')
const mathButtons = document.querySelectorAll('.maths')
const returnButton = document.querySelector('.equal')
let values = [];
let mathFunc = [];
let result = [];

numberButtons.forEach(button => button.addEventListener("click", function(e){displayNumbers(e)
}));

mathButtons.forEach(button => button.addEventListener("click", function(e){getFirstNumber(e)}));

returnButton.addEventListener("click", getResult)

function displayNumbers(e) {
    switch (result.length) {
        case 0:
           return display.textContent += e.target.textContent; 
        case undefined:
            values = result[0]
            result = [];
            return display.textContent = e.target.textContent;
    }
}

function getFirstNumber(e) {
    values = []
    let number = display.textContent;
    values.push(number);
    mathFunc = e.target.id;
    display.textContent = "";
}
function getResult() {
    if (result.length == 0) {
        switch (mathFunc) {
            case "multiply":
                result = parseFloat(values[0]) * parseFloat(display.textContent);
            return display.textContent = result;
            case "divide":
                result = parseFloat(values[0]) / parseFloat(display.textContent);
            return display.textContent = result;
            case "add":
                result = parseFloat(values[0]) + parseFloat(display.textContent);
            return display.textContent = result;
            case "subtract":
                result = parseFloat(values[0]) - parseFloat(display.textContent);
            return display.textContent = result;
            default:
                return console.log("error")
        }
    }else{
        x = parseFloat(result)
        switch (mathFunc) {
            case "multiply":
                result = parseFloat(display.textContent) * x;
            return display.textContent = result;
            case "divide":
                result = parseFloat(display.textContent) / x;
            return display.textContent = result;
            case "add":
                result = parseFloat(display.textContent) + x;
            return display.textContent = result
            case "subtract":
                result = parseFloat(display.textContent) - x;
            return display.textContent = result;
            default:
                return console.log("error")
        }
    }
}

function reset () {
    result = []
    values = [];
    mathFunc = [];
}