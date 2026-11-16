const dice = parseInt(prompt("How many dice rolls?"));

let sum = 0;

for (let i=0; i < dice; i++) {
    const roll =Math.floor(Math.random() * 6) + 1;
    sum +=roll;
}

document.querySelector("#result").textContent =
      `The sum of the dice rolls is ${sum}`;