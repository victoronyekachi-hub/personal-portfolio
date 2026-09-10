function add() {
    let number1 = Number(document.getElementById("number1").value);
    let number2 = Number(document.getElementById("number2").value);

    let result = number1 + number2;

    document.getElementById("result").textContent = result;
}
function subtract() {
    let number1 = Number(document.getElementById("number1").value);
    let number2 = Number(document.getElementById("number2").value);

    let result = number1 - number2;

    document.getElementById("result").textContent = result;
}
function multiply() {
    let number1 = Number(document.getElementById("number1").value);
    let number2 = Number(document.getElementById("number2").value);

    let result = number1 * number2;
function divide() {
    let number1 = Number(document.getElementById("number1").value);
    let number2 = Number(document.getElementById("number2").value);

    if (number2 === 0) {
        document.getElementById("result").textContent = "Cannot divide by zero";
        return;
    }

    let result = number1 / number2;

    document.getElementById("result").textContent = result;
}
    document.getElementById("result").textContent = result;
}