// import the data from data.js
const tableData = data;
// Reference the HTML table using d3
var tbody = d3.select("tbody");
//Function for creating the table 
function buildTable(data) {
    tbody.html("");
    data.forEach((dataRow) => {
        let row = tbody.append("tr");
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);

        });

    });

}
//Function to handle multiple filters
function updateFilters() {
    let date = d3.select("#datetime").property("value");
    let city = d3.select("#cityname").property("value");
    let state = d3.select("#statename").property("value");
    let country = d3.select("#countryname").property("value");
    let shape = d3.select("#shape").property("value"); 

    let filteredData = tableData;
    if (date) {
        // Apply `filter` to the table data to only keep the
        // rows where the `datetime` value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    }
    if (city) {
        // Apply `filter` to the table data to only keep the
        // rows where the `city` value matches the filter value
        filteredData = filteredData.filter(row => row.city === city);
    }
    if (state) {
        // Apply `filter` to the table data to only keep the
        // rows where the `state` value matches the filter value
        filteredData = filteredData.filter(row => row.state === state);
    }
    if (country) {
        // Apply `filter` to the table data to only keep the
        // rows where the `country` value matches the filter value
        filteredData = filteredData.filter(row => row.country === country);
    }
    if (shape) {
        // Apply `filter` to the table data to only keep the
        // rows where the `shape` value matches the filter value
        filteredData = filteredData.filter(row => row.shape === shape);
    }

    buildTable(filteredData);

}


d3.selectAll("#filter-btn").on("click", updateFilters);

// Build the table when the page loads
buildTable(tableData);
