// tips.js
const tips = [
    'Always use strict mode',
    'Avoid global variables',
    'Use descriptive variable names',
    'Avoid using eval()',
    'Use === instead of ==',
    'Use const and let instead of var',
    'Avoid modifying objects you don\'t own',
    'Use arrow functions instead of function expressions',
    'Use template literals instead of string concatenation',
    'Use object destructuring to simplify your code'
];

const tipButton = document.getElementById('tipButton');
tipButton.addEventListener('click', function () {
    const randomIndex = Math.floor(Math.random() * tips.length);
    const randomTip = tips[randomIndex];
    alert(randomTip);
});