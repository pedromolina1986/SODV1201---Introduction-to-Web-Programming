function showStaff(){    
    var dataSet = GetStaff();   
    
    //create a table element
    var table = document.createElement("table");
    table.setAttribute("id", "staff-table");    
    table.setAttribute("class", "table table-striped table-bordered");

    //create a header row
    var headerRow = document.createElement("tr");
    var headers = ["Name", "Position", "Office", "Extension", "Start Date", "Salary"];
    headers.forEach(function(header) {      
        var th = document.createElement("th");
        th.textContent = header;
        th.addEventListener("click", function() {
            sortStaffTable(table, header);   
        });        
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);          

    //populate the table with data
    dataSet.forEach(function(staff) {   
        var row = document.createElement("tr");
        Object.values(staff).forEach(function(value) {
            var td = document.createElement("td");
            td.textContent = value;
            row.appendChild(td);
        });
        table.appendChild(row);
    });

    //append the table to the root element  
    const rootElement = document.getElementById("main-content");    
    rootElement.innerHTML = ""; // Clear any existing content   
    rootElement.appendChild(table); // Append the table to the root element
}

function sortStaffTable(table, columnName) {    
    var rows = Array.from(table.rows).slice(1); // Exclude header row
    var index = Array.from(table.rows[0].cells).findIndex(cell => cell.textContent === columnName);
    
    // Sort rows based on the specified column
    rows.sort(function(a, b) {
        var cellA = a.cells[index].textContent;
        var cellB = b.cells[index].textContent;
        
        if (columnName === "Salary") {
            return parseFloat(cellA.replace(/[$,]/g, "")) - parseFloat(cellB.replace(/[$,]/g, ""));
        } else {
            return cellA.localeCompare(cellB);
        }
    });
    
    // Clear existing rows and append sorted rows        
    while (table.querySelector("tr").length > 1) {        
            table.removeChild(table.lastChild);                            
    }

    // Append sorted rows back to the table
    rows.forEach(function(row) {
        table.appendChild(row);
    });
}