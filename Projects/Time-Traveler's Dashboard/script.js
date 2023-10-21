// JavaScript to simulate time-travel controls
const timeDisplay = document.getElementById("timeDisplay");
const backButton = document.getElementById("backButton");
const forwardButton = document.getElementById("forwardButton");
let currentTime = 2023; // Initial time

backButton.addEventListener("click", () => {
    currentTime -= 1;
    updateTimeDisplay();
    addAnimationClass("pulse-reverse");
});

forwardButton.addEventListener("click", () => {
    currentTime += 1;
    updateTimeDisplay();
    addAnimationClass("pulse");
});

function updateTimeDisplay() {
    timeDisplay.textContent = `Current Time: ${currentTime}`;
}

function addAnimationClass(animationClass) {
    timeDisplay.classList.add(animationClass);
    // Remove the class after the animation completes
    timeDisplay.addEventListener("animationend", () => {
        timeDisplay.classList.remove(animationClass);
    });
}
