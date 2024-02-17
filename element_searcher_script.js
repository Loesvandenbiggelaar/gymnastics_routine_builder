
var global_selected_apparatus = "vault"
var global_elements_data;
let dataTable;

// This function will be executed when clicked on one of the apparatus buttons.
// It will intitate the table.
function showSelection() {
    var selectedOption = document.querySelector('input[name="options"]:checked');
    if (selectedOption) {
        global_selected_apparatus = selectedOption.value
        display_json(global_elements_data[global_selected_apparatus])
    } else {
        alert("Please select an option.");
    }
}

// load json data
function load_json(file){
    fetch(file)
        .then(response => response.json())
        .then(data => {global_elements_data = data})
        .catch(error => console.error('Error fetching data:', error));
}

function display_json(data) {

    // Destroy the existing DataTable instance if it exists
    if ($.fn.DataTable.isDataTable('#tsvTable')) {
        // If yes, destroy the existing instance
        $('#tsvTable').DataTable().destroy();
    }
    element_objects = Object.values(data).map(item => {delete item.breakdown; return item})
    

    // Assume that the first element has the same keys as all the other elements.
    // The keys will be used as headers
    const headers = Object.keys(element_objects[0]).map(column => {
        return { "data": column };
        });

    const headerHTML = Object.keys(element_objects[0]).map(column => {
        return "<th>"+column+"</th>";
        });
    
    
    // Fill HTML 
    table = document.getElementById("tsvTable");
    table.innerHTML = "<thead><tr>"+headerHTML.join('')+"</tr></thead><tbody><!-- Table body will be filled dynamically using JavaScript --></tbody>"

    // Initialize DataTables
    //  see options: https://datatables.net/reference/option/
    $('#tsvTable').DataTable({
        columns:headers,
        data:element_objects,
    });

}

load_json("data/elements.json")