const startYear = pareseInt(prompt("Enter the start year:"));
const endYear = parseInt(prompt("Enter the end year:"));

let result = "";

for (let year =startYear; year <= endYear; year++) {
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        result += `<li>${year}</li>`;
    }
}

document.querySelectorAll("#result").innerHTML = result;