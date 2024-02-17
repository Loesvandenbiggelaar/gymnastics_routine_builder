$(document).ready(function() {
    // Fetch the content of header.html
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            // Append the fetched content to the existing content inside #header-container
            $('body').prepend(data);
        })
        .catch(error => console.error('Error fetching header:', error));
});