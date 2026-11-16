const num1 = parseInt(promt("Enter first integer:"));
const num2 = parseInt(promt("Enter first integer:"));
const num3 = parseInt(promt("Enter first integer:"));

const sum = num1 + num2 + num3;
const product = num1 * num2 * num3;
const average = sum / 3;

document.querySelector("#result").innerHTML = `
    Sum: ${sum}<br>
    Product: ${product}<br>
    Average: ${average}<br>
    `;