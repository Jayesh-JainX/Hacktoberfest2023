const forwardButton = document.getElementById('forward');
const backwardButton = document.getElementById('backward');
const progressBar = document.querySelector('.progress');
const welcomeBox = document.querySelector('.welcome-box');

let step = 1; 

const content = [
    {
        title: 'Welcome to Our Platform',
        description: 'Welcome to our platform. Let\'s get started on an amazing journey.',
    },
    {
        title: 'Step 1: Registration',
        description: 'Please complete your registration to access all our features.',
    },
    {
        title: 'Step 2: Profile Setup',
        description: 'Tell us more about yourself. Complete your profile setup.',
    },
    {
        title: 'Step 3: Get Started',
        description: 'You are all set! Get started with our platform now.',
    },
];

forwardButton.addEventListener('click', () => {
    if (step < content.length) {
        step++;
        updateProgress(step);
    }
});

backwardButton.addEventListener('click', () => {
    if (step > 1) {
        step--;
        updateProgress(step);
    }
});

function updateProgress(step) {
    progressBar.style.width = `${(step / content.length) * 100}%`;
    updateContent(step);
}

function updateContent(step) {
    welcomeBox.innerHTML = `
        <h1>${content[step - 1].title}</h1>
        <p>${content[step - 1].description}</p>
    `;
}

// Initialize the content
updateContent(step);
