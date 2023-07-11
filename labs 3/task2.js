var arr = [];
var sum = 0;
var mul = 1;
var div = 1;

for (var i = 0; i < 3; i++) {
    arr[i] = prompt("Enter the value of element number " + (i + 1));
}

var operations = ["sum", "multiplication", "division"];
var results = [sum, mul, div];
var operator = "";

for (var i = 0; i < operations.length; i++) {
    for (var j = 0; j < arr.length; j++) {
        if (operations[i] == "sum") {
            results[i] += parseInt(arr[j]);
        } else if (operations[i] == "multiplication") {
            results[i] *= parseInt(arr[j]);
        } else if (operations[i] == "division") {
            results[i] /= parseInt(arr[j]);
        }
    }
}

for (var i = 0; i < operations.length; i++) {
    if (i == 0) {
        operator = "+";
    } else if (i == 1) {
        operator = "*";
    }
    else if (i == 2) {
        operator = "/";
    }
    document.write(operations[i] + " of the 3 values " + arr[0] + operator + arr[1] + operator + arr[2] + " = " + results[i] + "<br>");
}