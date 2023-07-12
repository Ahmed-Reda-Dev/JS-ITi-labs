// parent.js
const form = document.getElementById('myForm');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const birthday = document.getElementById('birthday').value;
  const address = document.getElementById('address').value;

  const params = new URLSearchParams({
    name: name,
    age: age,
    birthday: birthday,
    address: address
  });

  window.location.href = `display.html?${params.toString()}`;
});