const language = "nl";
globalThis.eisen_initiated;
globalThis.element_info_initiated;
globalThis.verbindingswaarde_info_initiated;

// Load json data
function load_json(file) {
  fetch(file)
    .then((response) => response.json())
    .then((data) => {
      globalThis.supplements = data;
    })
    .catch((error) => console.error("Error fetching data:", error));
}
load_json("data/supplements/NSTB_supplements_Dames.json");

// This function will be executed when clicked on one of the level buttons.
// It will show the information.
function showLevel() {
  var selectedOption = document.querySelector('input[name="levels"]:checked');
  if (selectedOption) {
    globalThis.selected_level = selectedOption.value;
    showInformation();
  } else {
    alert("Please select an option.");
  }
}

// This function will be executed when clicked on one of the apparatus buttons.
// It will show the information.
function showApparatus() {
  var selectedOption = document.querySelector('input[name="options"]:checked');
  if (selectedOption) {
    globalThis.selected_apparatus = selectedOption.value;
    showInformation();
  } else {
    alert("Please select an option.");
  }
}

// When the level and apparatus are both selected, get the different aspects of the rules.
// Each aspect is executed by another function.
function showInformation() {
  if (globalThis.selected_apparatus && globalThis.selected_level) {
    Moeilijkheidswaarde();
    eisen();
    verbindingswaarde();
  }
}

// one of the aspects of the rules.
// These rules do not really apply to Vault, so when that apparatus is selected, the data will just be empty.
// The 'dans' and 'acro' also doesn't apply to uneven bars. so if that is selected, 'dans' and 'acro' won't be displayed.
function Moeilijkheidswaarde() {
  const moeilijkheidswaarde =
    globalThis.supplements[globalThis.selected_level]["D-score"][
      "Moeilijkheidswaarde"
    ];

  // get the data
  data = [];
  for (const key in moeilijkheidswaarde) {
    if (globalThis.selected_apparatus == "vault") {
      break;
    } else {
      if (globalThis.selected_apparatus == "uneven bars") {
        if (["Minimaal dans", "Minimaal acro"].includes(key)) {
          continue;
        }
      }
    }

    if (key == "Moeilijkheid") {
      data.push([key, moeilijkheidswaarde[key].join(", ")]);
    } else {
      data.push([key, moeilijkheidswaarde[key]]);
    }
  }

  // initiate table
  globalThis.element_info_initiated = initiate_table(
    data,
    globalThis.element_info_initiated,
    "elements_placeholder"
  );
}

// Get all the 'eisen' for each apparatus. the result will be displayed in a table.
function eisen() {
  const samenstellingseisen =
    globalThis.supplements[globalThis.selected_level]["Samenstellingseisen"][
      globalThis.selected_apparatus
    ];
  data = [];
  for (const key in samenstellingseisen) {
    data.push([key, samenstellingseisen[key]["Description"][language]]);
  }
  globalThis.eisen_initiated = initiate_table(
    data,
    globalThis.eisen_initiated,
    "eisen_placeholder"
  );
}

function process_difficulties(json) {
  dict = {};
  for (const key in json) {
    if (["0.1", "0.2"].includes(key)) {
      // console.log(key);
      element_options = [];
      json[key].forEach((element) => {
        // console.log(element.join("+"));

        element_updated = [];
        element.forEach((e) => {
          if (e.length > 1) {
            element_updated.push(e[0] + " or higher");
          } else {
            element_updated.push(e);
          }
        });
        // console.log(element_updated);
        // console.log(dict);
        element_options.push(element_updated.join(" + "));
        // data.push(dict);
      });
      dict[key] = element_options.join(" \n ");
      // dict[key] = element_options;
      // data.push(dict);
      // console.log(element_options);
    } else {
      dict[key] = json[key];
    }
  }
  // console.log(data);
  return dict;
}

function verbindingswaarde() {
  const verbindingswaarde_json =
    globalThis.supplements[globalThis.selected_level]["Verbindingswaarde"][
      globalThis.selected_apparatus
    ];
  data = [];
  if (globalThis.selected_apparatus != "vault") {
    for (const key in verbindingswaarde_json) {
      console.log(key, verbindingswaarde_json[key]);
      adjusted_json = process_difficulties(verbindingswaarde_json[key]);
      console.log(adjusted_json);
      data.push(adjusted_json);
      // update = adjusted_json;
      // console.log(update);
      // for (const key in adjusted_json) {
      //   console.log(key, adjusted_json[key]);
      //   if (Array.isArray(adjusted_json[key])) {
      //     for (let index = 0; index < adjusted_json[key].length; index++) {
      //       update[key] = adjusted_json[key][index];
      //       data.push(update);
      //       console.log(update);
      //     }
      //   }
      // }
    }
  }

  console.log(data);
  globalThis.verbindingswaarde_info_initiated = initiate_table(
    data,
    globalThis.verbindingswaarde_info_initiated,
    "verbindingswaarde_placeholder"
  );
}

// function used to show the different aspects.
// data is given as an array of jsons.
// init is the variable to check wether the table object has already been filled up once.
// id refers to the id of a html element where to initiate the table.
function initiate_table(data, init, id) {
  if (init) {
    init.updateConfig({ data: data }).forceRender();
  } else {
    init = new gridjs.Grid({
      data: data,
    }).render(document.getElementById(id));
  }
  return init;
}
