var message = prompt("Enter a message");
var header = "";
for (var i = 1; i <= 6; i++) {
    header += "<h" + i + ">" + message + "</h" + i + ">";
}
document.write(header);
