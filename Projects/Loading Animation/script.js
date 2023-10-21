
document.addEventListener("DOMContentLoaded", function () {

    const loader = document.querySelector(".loader");
    const content = document.querySelector(".content");

    setTimeout(() => {
        loader.style.display = "none";
        content.style.opacity = 1;
    }, 3000); 
});