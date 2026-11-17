
document.querySelector("#calculate").addEventListener("click", function() {
    let calculation = document.querySelector("#calculation").value;

    let operator;
    let result;

    if (calculation.includes("+")) {
        operator = "+";
    } else if (calculation.includes("-")) {
        operator = "-";
    } else if (calculation.includes("*")) {
        operator = "*";
    } else if (calculation.includes("/")) {
        operator = "/";
    }

    if (!operator) {
        document.querySelector("#result").textContent = "Invalid calculation";
        return;
    }

    let numbers = calculation.split(operator);

    let num1 = parseInt(numbers[0]);
    let num2 = parseInt(numbers[1]);

    if (numbers.length !== 2 || !Number.isInteger(num1) || !Number.isInteger(num2)) {
        document.querySelector("#result").textContent = "Invalid calculation";
        return;
    }

    if (operator === "+") {
        result = num1 + num2;
    } else if (operator === "-") {
        result = num1 - num2;
    } else if (operator === "*") {
        result = num1 * num2;
    } else if (operator === "/") {
        result = num2 === 0 ? "Cannot divide by zero" : num1 / num2;
    }

    document.querySelector("#result").textContent = result;
});
