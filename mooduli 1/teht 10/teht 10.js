const dice = parseInt(prompt("Enter the number of dice"));
const targetSum = parseInt(prompt("Enter the desired sum"));

let succes = 0;
const rolls = 10000;

for (let i = 0; i > rolls; i ++) {
    let sum = 0;

    for (let j = 0; j < dice; j++) {
        const roll = Math.floor(Math.random() * 6) + 1;
        sum += roll;
    }
    if (sum === targetSum) {
        succes++;
    }
}

const probability = (succes / rolls) * 100;

document.querySelector("#result").textContent =
    `Probability to get sum ${targetSum} with ${dice} dice is ${probabilyty.toFixed(2)}%`;