var userString = prompt("enter a string");
var userChoice = prompt("enter your choice: \n 1- case sensitive search \n 2- case insensitive search");
switch (userChoice) {
    case "1":
        var userChar = prompt("enter a character to search for");
        var count = 0;
        for (var i = 0; i < userString.length; i++) {
            if (userString.charAt(i) == userChar) {
                count++;
            }
        }
        alert("the number of " + userChar + " in the string is: " + count);
        break;
    case "2":
        var userChar = prompt("enter a character to search for");
        var count = 0;
        for (var i = 0; i < userString.length; i++) {
            if (userString.charAt(i).toLowerCase() == userChar.toLowerCase()) {
                count++;
            }
        }
        alert("the number of " + userChar + " in the string is: " + count);
        break;
    default:
        alert("invalid choice");
        break;
}
