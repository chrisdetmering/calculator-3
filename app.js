const display = document.querySelector(".display")
const allButtons = document.querySelectorAll('button')

allButtons.forEach(button => button.addEventListener("click", function(e){ display.textContent = e.target.textContent
}));

