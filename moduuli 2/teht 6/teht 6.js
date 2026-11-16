
let dice = parseInt(prompt("Enter number of dice:"));
let target = parseInt(prompt("Enter desired sum:"));

let rolls = 10000;
let success = 0;

for (let i = 0; i < rolls; i++) {
    let sum = 0;

    for (let j = 0; j < dice; j++) {
        let number = Math.floor(Math.random() * 6) + 1;
        sum += number;
    }

    if (sum === target) {
        success++;
    }
}

let probability = (success / rolls) * 100;

document.querySelector("#result").textContent =
    "Probability to get sum " + target +
    " with " + dice +
    " dice is " + probability.toFixed(2) + "%";
