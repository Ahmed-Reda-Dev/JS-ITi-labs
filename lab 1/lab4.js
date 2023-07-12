var myName = prompt("Enter your name");
while (typeof myName != "string") {
    myName = prompt("Enter your name");
}
let birthYear = parseInt(prompt("Enter your birth year"));
while (isNaN(birthYear) || birthYear >= 2010) {
    birthYear = parseInt(prompt("Enter your birth year"));
}

let age = new Date().getFullYear() - birthYear;
document.write(`Name: ${myName}<br>Birth year: ${birthYear}<br>Age: ${age}`);
