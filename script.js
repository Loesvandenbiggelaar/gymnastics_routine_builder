
var selectedApparatus = "vault"
let dataTable;
function showSelection() {
    var selectedOption = document.querySelector('input[name="options"]:checked');

    if (selectedOption) {
        var outputDiv = document.getElementById("output");
        selectedApparatus = selectedOption.value
        // console.log("Selected Option: " + selectedApparatus)
        createButtons(selectedApparatus);

        displayTSV('data/'+selectedApparatus+'.tsv')
    } else {
        alert("Please select an option.");
    }
}
function displayTSV(filePath) {
    table = document.getElementById("tsvTable");
    table.innerHTML = "<thead><tr><th>Number</th><th>Description</th><th>Value</th><th>Group</th><th>Difficulty</th><th>Type</th></tr></thead><tbody><!-- Table body will be filled dynamically using JavaScript --></tbody>"

    // Destroy the existing DataTable instance if it exists
    if ($.fn.DataTable.isDataTable('#tsvTable')) {
        // If yes, destroy the existing instance
        $('#tsvTable').DataTable().destroy();
    }

    // Fetch TSV data
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            // Split the TSV data into rows and columns
            const rows = data.split('\n');
            const tableBody = $('#tsvTable tbody');
            tableBody.empty(); // Clear existing rows

            // Iterate through rows and columns to populate the table
            for (const row of rows) {
                if (row.trim() === '') {
                    continue;
                }
                const columns = row.split('\t');
                const newRow = $('<tr onclick="selectRow(this)">');

                for (const column of columns) {
                    const cell = $('<td>').text(column);
                    newRow.append(cell);
                }

                tableBody.append(newRow);
            }

            if (selectedApparatus == "vault")
            {columntargets = [0,3,4,5]} else {columntargets = [0,2,3,5]}
            // Initialize DataTables
            //  see options: https://datatables.net/reference/option/
            $('#tsvTable').DataTable({
                // destroy:true,
                searching: true,
                select:true,
                paging: true,
                ordering: true,
                lengthMenu: [10, 25, 50, 75, 100],
                info: false,
                columnDefs: [{targets: columntargets, visible:false}],
                pageLength: 10, // Initial number of rows per page
            });

        })
        .catch(error => console.error('Error fetching TSV data:', error));
}

function createButtons(eventType) {
    fetch('data/groups.json')
        .then(response => response.json())
        .then(jsonData => {
            const container = document.getElementById('checkboxesContainer');
            container.innerHTML = ''; // Clear existing buttons

            const keys = Object.keys(jsonData[eventType]);
            keys.forEach(key => {
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.id = key;

                const label = document.createElement('label');
                label.className = 'checkbox-label';
                label.htmlFor = key;
                label.innerHTML = `${key}: ${jsonData[eventType][key]}`;

                container.appendChild(checkbox);
                container.appendChild(label);
            });
        updateTableOnCheckboxChange(jsonData);

        })
        .catch(error => console.error('Error fetching JSON file:', error));
}

// Function to update DataTables based on checkbox changes
function updateTableOnCheckboxChange(jsonData) {
    const checkboxes = document.querySelectorAll('#checkboxesContainer input');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            const selectedItems = Array.from(checkboxes)
                .filter(checkbox => checkbox.checked)
                .map(checkbox => checkbox.id);
            const filteredData = Object.keys(jsonData[selectedApparatus])
                .filter(key => selectedItems.includes(key))
                .map(key => key);

                updateTable(filteredData);

        });
    });
}

// Function to update DataTables with new data
    function updateTable(data) {
        $('#tsvTable').DataTable().column(3).search(data.join("|"), true, true, false).draw()
    }


function selectRow(item) {
    
    console.log(item)

}