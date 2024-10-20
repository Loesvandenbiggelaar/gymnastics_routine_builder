var global_selected_apparatus;
var global_elements_data;
let elements_table;

// Load json data
function load_json(file) {
  fetch(file)
    .then((response) => response.json())
    .then((data) => {
      global_elements_data = data;
    })
    .catch((error) => console.error("Error fetching data:", error));
}
load_json("data/elements.json");

// This function will be executed when clicked on one of the apparatus buttons.
// It will intitate the table.
function showSelection() {
  var selectedOption = document.querySelector('input[name="options"]:checked');
  if (selectedOption) {
    global_selected_apparatus = selectedOption.value;
    instantiate_table(global_elements_data[global_selected_apparatus]);
  } else {
    alert("Please select an option.");
  }
}

function instantiate_table(data) {
  if (elements_table) {
    elements_table.updateConfig({ data: data }).forceRender();
  } else {
    elements_table = new gridjs.Grid({
      columns: [
        {
          id: "number",
          name: "nr",
        },
        {
          id: "description",
          name: "Description",
        },
        {
          id: "value",
          name: "Value",
        },
        {
          id: "difficulty",
          name: "Difficulty",
        },
      ],
      data: data,
    }).render(document.getElementById("wrapper"));
  }
}
