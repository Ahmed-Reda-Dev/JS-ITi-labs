let lab = prompt("Enter lab number (1-4): ");

switch (lab) {
    case "1":
        import('lab1.js');
        break;
    case "2":
        import('lab2.js');
        break;
    case "3":
        import('lab3.js');
        break;
    case "4":
        import('lab4.js');
        break;
    default:
        alert("Invalid lab number");
        break;
}
