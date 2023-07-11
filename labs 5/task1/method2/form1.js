var data = window.location.search
var arr = data.substring(1).split("&");

for (var i = 0; i < arr.length; i++) {
    document.write("<h2>" + arr[i] + "</h2>")

}
//display result in display1.html page
document.write("<h2>" + arr + "</h2>")
