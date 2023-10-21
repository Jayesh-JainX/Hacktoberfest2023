// JavaScript to display the post after a delay
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.querySelector(".social-media-post").style.opacity = 1;
        document.querySelector(".social-media-post").style.transform = "translateY(0)";
    }, 1000);
});
