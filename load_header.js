// Load header.html
$(document).ready(async function() {    
    try {
        // Fetch the content of header.html
        const response = await fetch('header.html');
        if (!response.ok) {
            throw new Error('Failed to fetch header: ' + response.status);
        }
        const data = await response.text();

        // Append the fetched content to the existing content inside #header-container
        $('body').prepend(data);
    } catch (error) {
        console.error('Error fetching header:', error);
    }
});

//Set active styles for the page links
$(document).ready(function() { 
    // Get the current page's URL
    const current_path = window.location.pathname;
    console.log("Current Path", current_path);
    // Find all <a> tags inside the <nav id="page-navigation"> and loop through them
    $('#page-navigation').find('a').each(function() {
        console.log($(this).attr('href'));
        // Check if the link's href matches the current page's URL
        if ($(this).attr('href') === current_path) {
            // Add 'current' class to the link if it's the current page
            $(this).addClass('active');
        }
    });

});