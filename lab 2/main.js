let lab = prompt("Enter lab number (1-4): ");

switch (lab) {
    case "1":
        import('task1.js');
        break;
    case "2":
        import('task2.js');
        break;
    case "3":
        import('task3.js');
        break;
    default:
        alert("Invalid lab number");
        break;
}