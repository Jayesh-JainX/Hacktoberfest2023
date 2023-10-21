// JavaScript to handle gamification
const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");
const completeTaskButton = document.getElementById("complete-task");

let progress = 70;
let tasksCompleted = 0;

completeTaskButton.addEventListener("click", () => {
    if (tasksCompleted < 10) {
        progress += 10;
        tasksCompleted++;
        updateProgress();
    }
});

function updateProgress() {
    if (progress > 100) {
        progress = 100;
    }

    // Animate the progress bar
    progressBar.style.width = `${progress}%`;

    progressText.textContent = `${progress}% Complete`;

    if (progress === 100) {
        completeTaskButton.disabled = true; // Disable the button when all tasks are completed
        alert("Congratulations! You've completed all tasks.");
    }
}
