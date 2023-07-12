var arr = [];
var arrLength = prompt("Enter the length of the array");
for (var i = 0; i < arrLength; i++) {
    arr[i] = prompt("Enter the value of element number " + (i + 1));
}
if (arrLength > 1 && !isNaN(arr[0])) {
    var maxLength = 0;
    for (var i = 0; i < arrLength; i++) {
        if (arr[i].length > maxLength) {
            maxLength = arr[i].length;
        }
    }
    for (var i = 0; i < arrLength; i++) {
        var spaces = "";
        for (var j = 0; j < maxLength - arr[i].length; j++) {
            spaces += "0";
        }
        arr[i] = arr[i].split(".");
        arr[i][1] = arr[i][1] + spaces;;
        arr[i] = arr[i].join(".");

        document.write(arr[i] + "<br>");
    }
} else {
    //display error message and let the user enter the array again in a prompt
    alert("Please enter a valid array");
    location.reload();
}
