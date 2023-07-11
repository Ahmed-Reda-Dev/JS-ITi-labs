//get string from user 
var str = prompt("Enter a string: ");

const separator = '*';

// Using call()
const result1 = Array.prototype.join.call(str, separator);
//display result in html page
document.write(result1 + "\n");

// Using apply()
const result2 = Array.prototype.join.apply(str, [separator]);
document.write(result2 + "\n");

// Using bind()
const result3 = Array.prototype.join.bind(str, separator)();
document.write(result3 + "\n");

