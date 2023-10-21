const startButton = document.getElementById('start-button');
const nextButton = document.getElementById('next-button');
const endButton = document.getElementById('end-button');
const storySteps = document.querySelectorAll('.story-step');
let currentStep = 0;

startButton.addEventListener('click', function () {
  startButton.style.display = 'none';
  const audio = document.getElementById('background-music');
  audio.play(); // Play background music
  showStep(currentStep);
});

nextButton.addEventListener('click', function () {
  if (currentStep < storySteps.length - 1) {
    hideStep(currentStep);
    currentStep++;
    showStep(currentStep);
    if (currentStep === storySteps.length - 1) {
      endButton.style.display = 'inline-block';
    }
  }
});

endButton.addEventListener('click', function () {
  const audio = document.getElementById('background-music');
  audio.pause(); // Pause background music
  alert("Thanks for exploring our project's journey!");
});

function showStep(step) {
  storySteps[step].style.display = 'block';
  storySteps[step].style.animation = 'fadeIn 1s';
}

function hideStep(step) {
  storySteps[step].style.animation = 'fadeOut 1s';
  setTimeout(function () {
    storySteps[step].style.display = 'none';
  }, 1000);
}
