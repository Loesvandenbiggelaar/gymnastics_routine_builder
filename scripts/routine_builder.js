// Load json data
function load_elements(file) {
  fetch(file)
    .then((response) => response.json())
    .then((data) => {
      globalThis.elements_data = data;
      //   console.log(data);
    })
    .catch((error) => console.error("Error fetching data:", error));
}
load_elements("data/elements.json");

// This function creates a 'datalist' element in HTML.
// This is used for the dropdown menu/search for the inputs.
// the select and optgroup elements are strictly not necessary in the current version,
// but are necessary for the optgroup-datalist which is a nice to have.
// The data is fetched and is filtered on the selected apparatus.
// Then, for each group (1 t/m 6) an optgroup is created
// TODO: might need to change this into a nice plugin.

// When a correct input is given, another empty slot needs to be created so the user can keep adding inputs.
// A counter is used to keep track of the number of elements/slots.
function create_datalist(div) {
  // do HTML stuff

  input_div = document.createElement("div");
  input_div.setAttribute("id", "input_div_" + globalThis.counter);
  select = document.createElement("select");
  input_div.append(select);
  select.setAttribute("style", "width:80%");
  select.setAttribute("id", "selector_" + globalThis.counter);
  select.setAttribute("multiple", "multiple");
  select.setAttribute("change", "update_routine(this)");
  div.append(input_div);

  // fetch data
  data = globalThis.elements_data[globalThis.selected_apparatus];

  // loop over groups
  // TODO: fetch the groups based on the metadata/element group info, instead of a random list with numbers.
  ["1", "2", "3", "4", "5", "6"].forEach((group) => {
    optgroup = document.createElement("optgroup");
    select.append(optgroup);
    data.forEach((element) => {
      if (element["group"] == group) {
        option = document.createElement("option");
        option.setAttribute("value", element["number"]);
        // setting the innerhtml is a intermediate solution for showing the group and value of an element.
        if (globalThis.selected_apparatus == "vault") {
          option.innerHTML =
            "(" + element["value"] + " p.) " + element["description"];
        } else {
          option.innerHTML =
            "(" + element["difficulty"] + ") " + element["description"];
        }
        optgroup.append(option);
      }
    });
  });
  selector = $("#selector_" + globalThis.counter);
  selector.select2();
  selector.on("change.select2", function (e) {
    update_routine();
  });

  globalThis.counter += 1;
}

// This function will be executed when clicked on one of the apparatus buttons.
// It will create an empty 'canvas' so we can start fresh with the routine building.
function showApparatus() {
  var selectedOption = document.querySelector('input[name="options"]:checked');
  if (selectedOption) {
    globalThis.selected_apparatus = selectedOption.value;
    globalThis.counter = 1;
    div = $("#routine_placeholder");
    div.empty();
    create_datalist(div);
    update_d_score();
  } else {
    alert("Please select an option.");
  }
}

// When a correct input is given, another empty slot needs to be created so the user can keep adding inputs.
// A counter is used to keep track of the number of elements/slots.

// Given a string of text (the input), find the correct entry in the 'database'.
function find_element(string) {
  data = globalThis.elements_data[globalThis.selected_apparatus];
  res = {};
  globalThis.elements_data[globalThis.selected_apparatus].forEach((element) => {
    if (element["number"] == string) {
      res = element;
    }
  });
  return res;
}

// Collect all the inputs from the routine, find the dictionary of the element and count the "moeilijkheidswaarde" for now.
// this is not strictly the D-score
function update_d_score() {
  // reset values so we can start counting.
  globalThis.moeilijkheidswaarde = 0;
  nr_elements = 0;

  for (let index = 1; index < globalThis.counter; index++) {
    selector_data = $("#selector_" + index).select2("data");
    selector_data.forEach((element) => {
      res = find_element(element["id"]);
      if (res["value"]) {
        globalThis.moeilijkheidswaarde += parseFloat(res["value"]);
        nr_elements += 1;
      }
    });
  }

  // update the HTML
  $("#mw_value").html(
    Math.round((globalThis.moeilijkheidswaarde + Number.EPSILON) * 100) / 100
  );
  $("#nr_elements").html(nr_elements);
}

// if the second last input is empty or incorrect, the last input can be removed.
// Otherwise we can end up with a lot of empty slots!
function delete_input_if_necessary() {
  selector_data = $("#selector_" + String(globalThis.counter - 2));
  found = false;
  selector_data.select2("data").forEach((element) => {
    res = find_element(element["id"]);
    if (res["value"]) {
      found = true;
    }
  });
  if (!found) {
    $("#input_div_" + String(globalThis.counter - 1)).remove();
    globalThis.counter -= 1;
  }
}

// when an input is filled in this function is executed.
// If the input is valid, a new slot is added.
// the D score is calculated/updated.
// empty slots will be removed if necessary
function update_routine() {
  add_input();
  update_d_score();
  delete_input_if_necessary();
}

function add_input() {
  if (globalThis.counter > 1) {
    selector_data = $("#selector_" + String(globalThis.counter - 1)).select2(
      "data"
    );
    found = false;
    selector_data.forEach((element) => {
      res = find_element(element["id"]);
      if (res["value"]) {
        found = true;
      }
    });

    if (found) {
      div = $("#routine_placeholder");
      create_datalist(div);
    }
  }
}
