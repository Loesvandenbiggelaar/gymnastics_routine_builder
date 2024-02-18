var global_selected_apparatus;
var global_elements_data;
let dataTable;

// This function will be executed when clicked on one of the apparatus buttons.
// It will intitate the table.
function showSelection() {
  var selectedOption = document.querySelector('input[name="options"]:checked');
  if (selectedOption) {
    global_selected_apparatus = selectedOption.value;
    display_json(global_elements_data[global_selected_apparatus]);
  } else {
    alert("Please select an option.");
  }
}

// load json data
function load_json(file) {
  fetch(file)
    .then((response) => response.json())
    .then((data) => {
      global_elements_data = data;
    })
    .catch((error) => console.error("Error fetching data:", error));
}

function display_json(data) {
  // I don't want the breakdown information from the elements. I just want the 'general' information.
  element_objects = Object.values(data).map((item) => {
    delete item.breakdown;
    return item;
  });

  // Destroy the existing DataTable instance if it exists
  if ($.fn.DataTable.isDataTable("#elements_table")) {
    // If yes, destroy the existing instance
    $("#elements_table").DataTable().destroy();
  }

  // get the row of the header. make sure that the row is empty.
  var row = document.getElementById("table_header_row");
  row.innerHTML = "";

  // Fill the header with the keys found in the json.
  keys_json = Object.keys(element_objects[0]);
  header_items = [];
  for (let i = 0; i < keys_json.length; i++) {
    var cell = row.insertCell(i);
    header_items.push({ data: keys_json[i] });
    cell.innerHTML = keys_json[i];
  }

  // Initialize DataTables
  //  see options: https://datatables.net/reference/option/
  $("#elements_table").DataTable({
    columns: header_items,
    data: element_objects,
  });
}

load_json("data/elements.json");
