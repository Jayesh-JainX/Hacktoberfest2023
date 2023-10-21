document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu-toggle");
    const menuItems = document.getElementById("menu-items");

    menuToggle.addEventListener("click", function() {
        menuItems.classList.toggle("active");
        menuToggle.classList.toggle("active");
    });

    const menuLinks = menuItems.querySelectorAll("a");
    menuLinks.forEach(function(link) {
        link.addEventListener("click", function() {
            menuItems.classList.remove("active");
            menuToggle.classList.remove("active");
        });
    });
});
