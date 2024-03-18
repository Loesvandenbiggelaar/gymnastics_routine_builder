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
function create_datalist() {
  // do HTML stuff
  datalist = document.createElement("datalist");
  datalist.setAttribute("id", "elements_datalist");
  select = document.createElement("select");
  select.setAttribute("style", "width:100px");
  datalist.append(select);

  // fetch data
  data = globalThis.elements_data[globalThis.selected_apparatus];

  // loop over groups
  // TODO: fetch the groups based on the metadata/element group info, instead of a random list with numbers.
  ["1", "2", "3", "4", "5", "6"].forEach((group) => {
    optgroup = document.createElement("optgroup");
    optgroup.setAttribute("label", group);
    select.append(optgroup);
    data.forEach((element) => {
      if (element["group"] == group) {
        option = document.createElement("option");
        option.setAttribute("value", element["description"]);
        // setting the innerhtml is a intermediate solution for showing the group and value of an element.
        if (globalThis.selected_apparatus == "vault") {
          option.innerHTML = "GR " + group + "; val " + element["value"];
        } else {
          option.innerHTML = "GR " + group + "; dif " + element["difficulty"];
        }
        optgroup.append(option);
      }
    });
  });
  return datalist;
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
    div.append(create_datalist());
    add_input();
    update_d_score();
  } else {
    alert("Please select an option.");
  }
}

// When a correct input is given, another empty slot needs to be created so the user can keep adding inputs.
// A counter is used to keep track of the number of elements/slots.
function add_input() {
  div = $("#routine_placeholder");
  search_input = document.createElement("input");
  search_input.setAttribute("type", "text");
  search_input.setAttribute("placeholder", "element " + globalThis.counter);
  // search_input.setAttribute("data-optgroup-list", "elements_datalist"); // does not work somehow
  search_input.setAttribute("list", "elements_datalist");
  search_input.setAttribute("id", "element_" + globalThis.counter);
  search_input.setAttribute("onKeyUp", "update_routine(this)");
  div.append(search_input);
  globalThis.counter += 1;
}

// Given a string of text (the input), find the correct entry in the 'database'.
function find_element(string) {
  data = globalThis.elements_data[globalThis.selected_apparatus];
  res = {};
  globalThis.elements_data[globalThis.selected_apparatus].forEach((element) => {
    if (element["description"] == string) {
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
  nr_elements = 1;

  for (let index = 1; index < globalThis.counter; index++) {
    element = $("#element_" + String(index)).val();
    res = find_element(element);
    if (res["value"]) {
      globalThis.moeilijkheidswaarde +=
        Math.round(parseFloat(res["value"]) * 100) / 100;
    }
  }

  // update the HTML
  $("#mw_value").html(globalThis.moeilijkheidswaarde);
}

// if the second last input is empty or incorrect, the last input can be removed.
// Otherwise we can end up with a lot of empty slots!
function delete_input_if_necessary() {
  if (globalThis.counter > 2) {
    element_description = $("#element_" + String(globalThis.counter - 2)).val();
    res = find_element(element_description);
    if (!res["description"]) {
      $("#element_" + String(globalThis.counter - 1)).remove();
      globalThis.counter -= 1;
    }
  }
}

// when an input is filled in this function is executed.
// If the input is valid, a new slot is added.
// the D score is calculated/updated.
// empty slots will be removed if necessary
function update_routine() {
  element_description = $("#element_" + String(globalThis.counter - 1)).val();
  res = find_element(element_description);
  if (res["description"]) {
    add_input();
  }
  update_d_score();
  delete_input_if_necessary();
}
