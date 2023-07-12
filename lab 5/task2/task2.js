function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

var newwin;
var intervalId;
function openWindow() {

    newwin = open("child.html", "", "width=200,height=200")
}

function closeWindow() {
    newwin.close();
}

function moveByFun() {
    newwin.moveBy(getRandomInt(-900, 900), getRandomInt(-900, 900));
    newwin.focus();
}

function startInterval() {
    intervalId = setInterval(moveByFun, 1000)
}

function stopInterval() {
    clearInterval(intervalId)
    newwin.focus();
}