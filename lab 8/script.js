const form = document.getElementById('user-form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const address = document.getElementById('address').value;

    setCookie('user', JSON.stringify({ name, age, address }));


    window.location.href = 'display.html';
});