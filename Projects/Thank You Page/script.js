document.addEventListener("DOMContentLoaded", function () {

    const circle = document.querySelector(".circle");
    const star = document.querySelector(".star");

    function animateElements() {

        circle.style.animation = "growCircle 2s infinite alternate";

        star.style.animation = "rotateStar 2s infinite linear";
    }

    document.addEventListener("click", animateElements);
});
