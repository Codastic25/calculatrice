// my variables
const ecran = document.querySelector('.ecran');
const boutons = document.querySelectorAll('.btn');
const boutonReset = document.querySelector('.btn_reset');
const boutonEnter = document.querySelector('.btn_enter');
const boutonCalcul = document.querySelectorAll('.btn_calcul');
let expression = "";

// reset the screen
function updateScreen(value) {
    ecran.textContent = value;
}

// the input
function handleButtonClick(event) {
    const buttonValue = event.target.textContent;

    // if input = number or operation
    if (buttonValue !== "=" && buttonValue !== "C") {
        expression += buttonValue;
        updateScreen(expression);
    }
}

// reset expression
function resetCalculator() {
    expression = "";
    updateScreen("0");
}

// calculate expression
function calculate() {
    try {
        expression = eval(expression).toString();
        updateScreen(expression);
    } catch (error) {
        updateScreen("Erreur");
    }
}

boutons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});

// event C
boutonReset.addEventListener('click', resetCalculator);

// event =
boutonEnter.addEventListener('click', calculate);


boutonCalcul.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});
