var userNumber = prompt("enter a number");
var userChoice = prompt("enter your choice: \n 1- toLocaleString \n 2- toLocaleString with options \n 3- toFixed \n 4- toExponential \n 5- toPrecision\n ");
switch (userChoice) {
    case "1":
        alert(userNumber.toLocaleString());
        break;
    case "2":
        // change it to the country that its result will be different from the default
        var userOptions = prompt("enter your choice: \n 1- Germany \n 2- US \n 3- India \n 4- China \n 5- Japan");
        switch (userOptions) {
            case "1":
                alert(Number(userNumber).toLocaleString("de-DE"));
                break;
            case "2":
                alert(Number(userNumber).toLocaleString("en-US"));
                break;
            case "3":
                alert(Number(userNumber).toLocaleString("en-IN"));
                break;
            case "4":
                alert(Number(userNumber).toLocaleString("zh-CN"));
                break;
            case "5":
                alert(Number(userNumber).toLocaleString("ja-JP"));
                break;
            default:
                alert("invalid choice");
                break;

        }
        break;
    case "3":
        var userOptions = prompt("enter the number of digits after the decimal point");
        alert(Number(userNumber).toFixed(userOptions));
        break;
    case "4":
        var userOptions = prompt("enter the number of digits after the decimal point");
        alert(Number(userNumber).toExponential(userOptions));
        break;
    case "5":
        var userOptions = prompt("enter the number of digits after the decimal point");
        alert(Number(userNumber).toPrecision(userOptions));
        break;
    default:
        alert("invalid choice");
        break;
}

