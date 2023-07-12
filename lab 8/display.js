const user = JSON.parse(getCookie('user'));

if (user) {
    document.getElementById('name').innerText = user.name;
    document.getElementById('age').innerText = user.age;
    document.getElementById('address').innerText = user.address;
} else {
    window.location.href = 'index.html';
}
