// Global Variables


// Hamburger Bar
function hamburger() {
    var menu = document.getElementById("menu-links");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    }
    else {
        menu.style.display = "block";
    }
}




/*
function hamburger() {
    var menu = document.getElementById("menu-links");
        // Show Nav
    if (menu.style.display === "none"){
        $("#hamburger").click(function() {
            $("nav").show();
        });
    }
    else {
        // Hide Nav
    $("#hamburger").click(function() {
        $("nav").hide();
    });
    }
}
*/
