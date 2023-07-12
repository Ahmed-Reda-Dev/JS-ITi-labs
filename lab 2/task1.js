var userChoice = prompt("enter your choice: \n 1- enter the radius of the circle to calculate its area \n 2- enter the value to calculate its square root \n 3- enter the value to calculate its cos value");
switch (userChoice) {
    case "1":
        var radius = prompt("enter the radius of the circle");
        var area = Math.PI * radius * radius;
        alert("the area of the circle is: " + area);
        break;
    case "2":
        var value = prompt("enter the value to calculate its square root");
        var squareRoot = Math.sqrt(value);
        alert("the square root of the value is: " + squareRoot);
        break;
    case "3":
        var value = prompt("enter the value to calculate its cos value (in degrees)");
        var cosValue = Math.cos(value * Math.PI / 180);
        if (cosValue.toFixed(2) == 0.00 || cosValue.toFixed(2) == -0.00) {
            cosValue = 0;
        }
        alert("the cos value of the value is: " + cosValue);


        break;
    default:
        alert("invalid choice");
        break;
}