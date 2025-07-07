//START - MAIN PROGRAM

function showStaff(){    
    const dataSet = GetStaff();   
    
    //create a table element
    const table = document.createElement("table");
    table.setAttribute("id", "staff-table");    
    table.setAttribute("class", "table table-striped table-bordered");

    //create a header row
    const headerRow = document.createElement("tr");
    const headers = ["Name", "Position", "Office", "Extension", "Start Date", "Salary"];
    headers.forEach(function(header) {      
        var th = document.createElement("th");
        th.textContent = header + " (-)";
        th.attributes["sortType"] = "none";
        th.addEventListener("click", function() {
            // Determine the current sort type
            let currentSort = this.getAttribute("sortType");

            //clear the sort type from all headers
            Array.from(headerRow.children).forEach(function(headerCell) {
                headerCell.setAttribute("sortType", "none");
                headerCell.textContent = headerCell.textContent.replace(/ \((↑|↓|-)\)/, ""); // Remove any existing arrow
            });            
            
            // Toggle the sort type
            let newSort = (currentSort === "none" || currentSort === "desc") ? "asc" : "desc";
            this.setAttribute("sortType", newSort);

            // Update the header text with the appropriate arrow
            let text = this.textContent.replace(/ \((↑|↓|-)\)/, ""); // Remove any existing arrow
            text += newSort === "asc" ? " (↑)" : " (↓)";
            this.textContent = text;

            const columnNameToSort = this.textContent.slice(0, -4); // Remove the srot type from the text"                        
            // Call sorting function
            sortStaffTable(table, columnNameToSort, newSort);
        });        
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);          

    //populate the table with data
    dataSet.forEach(function(staff) {   
        const row = document.createElement("tr");
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

//END - MAIN PROGRAM

// START - AUX FUNCTIONS

function sortStaffTable(table, columnName, sortType) {    
    const rows = Array.from(table.rows).slice(1); // Exclude header row
    
    // Find the index of the column to sort
    const index = Array.from(table.rows[0].cells).findIndex(cell =>
        cell.textContent.includes(columnName.trim())
    ); 
   
    // Sort rows based on the specified column
    rows.sort(function(a, b) {
        if (sortType === "asc") {
            const temp = a;
            a = b;
            b = temp;
        }
        const cellA = a.cells[index].textContent;
        const cellB = b.cells[index].textContent;
        
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

//END - AUX FUNCTIONS