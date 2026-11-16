
let number = parseInt(prompt("Enter an integer:"));
let isPrime = true;

if (number <= 1) {
    isPrime = false;
}

for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
        isPrime = false;
        break;
    }
}

if (isPrime) {
    document.querySelector("#result").textContent =
        number + " is a prime number.";
} else {
    document.querySelector("#result").textContent =
        number + " is not a prime number.";
}
