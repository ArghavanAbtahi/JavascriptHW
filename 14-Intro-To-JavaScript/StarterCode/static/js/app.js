// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

tableData.forEach(function(ufoData) {
    var row = tbody.append("tr");
    Object.entries(ufoData).forEach(function([key, value]) {
        var cell = row.append("td");
        cell.text(value);
    });
});


var filterbtn = d3.select("#filter-btn")

filterbtn.on("click", function() {
    d3.event.preventDefault();

    var inputElement = d3.select("#datetime");
    var inputvalue = inputElement.property("value");

    var filtered = tableData.filter(siting => siting.datetime === inputvalue);
    console.log(filtered)

    d3.select("tbody").selectAll("tr").remove();

    var tbody = d3.select("tbody");

    filtered.forEach(function(filteredData) {
        var row = tbody.append("tr");
        Object.entries(filteredData).forEach(function([key, value]) {
            var cell = row.append("td");
            cell.text(value);
        });
    });

});
