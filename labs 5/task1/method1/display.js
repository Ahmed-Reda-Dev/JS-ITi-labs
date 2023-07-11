// display.js
const params = new URLSearchParams(window.location.search);

document.getElementById('name').textContent = params.get('name');
document.getElementById('age').textContent = params.get('age');
document.getElementById('birthday').textContent = params.get('birthday');
document.getElementById('address').textContent = params.get('address');