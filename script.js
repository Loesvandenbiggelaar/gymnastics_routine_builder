document.getElementById("showSelection").addEventListener("click", function() {
    showSelection();
});

function showSelection() {
    var selectedOption = document.querySelector('input[name="options"]:checked');

    if (selectedOption) {
        var outputDiv = document.getElementById("output");
        outputDiv.innerHTML = "Selected Option: " + selectedOption.value;
    } else {
        alert("Please select an option.");
    }
}

// function showSelection() {
//     var selectedOption = document.querySelector('input[name="options"]:checked');

//     if (selectedOption) {
//         var outputDiv = document.getElementById("output");
//         outputDiv.innerHTML = "Selected Option: " + selectedOption.value;
//     } else {
//         alert("Please select an option.");
//     }
// }