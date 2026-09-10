function add() {
    let a = Number(document.getElementById("number1").value);
    let b = Number(document.getElementById("number2").value);
    document.getElementById("result").textContent = a + b;
}

function subtract() {
    let a = Number(document.getElementById("number1").value);
    let b = Number(document.getElementById("number2").value);
    document.getElementById("result").textContent = a - b;
}

function multiply() {
    let a = Number(document.getElementById("number1").value);
    let b = Number(document.getElementById("number2").value);
    document.getElementById("result").textContent = a * b;
}

function divide() {
    let a = Number(document.getElementById("number1").value);
    let b = Number(document.getElementById("number2").value);

    if (b === 0) {
        document.getElementById("result").textContent = "Cannot divide by zero";
    } else {
        document.getElementById("result").textContent = a / b;
    }
}