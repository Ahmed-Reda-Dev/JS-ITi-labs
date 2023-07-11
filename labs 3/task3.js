var arr = [];
var arrLength = 5;
for (var i = 0; i < arrLength; i++) {
    arr[i] = prompt("Enter the value of element number " + (i + 1));
}
if (arrLength > 1 && !isNaN(arr[0])) {
    document.write("The array: " + arr + "<br>");
    arr.sort(function (a, b) { return a - b });
    document.write("Ascending order: " + arr + "<br>");
    arr.sort(function (a, b) { return b - a });
    document.write("Descending order: " + arr + "<br>");
} else {
    alert("Please enter a valid array");
    location.reload();
}