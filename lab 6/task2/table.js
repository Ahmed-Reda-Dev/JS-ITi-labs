function drawTable() {
    var table = document.createElement("table");
    table.setAttribute("border", "2");
    table.setAttribute("cellspacing", "5");
    table.setAttribute("cellpadding", "60");
    table.setAttribute("align", "center");
    var tbody = document.createElement("tbody");
    for (var i = 0; i < 3; i++) {
        var tr = document.createElement("tr");
        for (var j = 0; j < 4; j++) {
            var td = document.createElement("td");
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    table.appendChild(tbody);
    document.body.appendChild(table);
}

drawTable();

