//Set active styles for the page links
$(document).ready(function() { 
    // Get the current page's URL
    const current_page = window.location.pathname.split('/').pop().split('#')[0];
    console.log("Current Path", current_page);

    $("nav").find(".page_link").each(function() {
        var href = $(this).attr('href').split('/').pop();
        if (current_page === href) {
            $(this).addClass('active')
        }
});
});