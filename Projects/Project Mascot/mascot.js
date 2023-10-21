// mascot.js
const mascot = document.querySelector('.mascot');
const greetButton = document.getElementById('greet-button');
const mascotGreeting = document.getElementById('mascot-greeting');

mascot.addEventListener('click', () => {
    mascotGreeting.textContent = 'Hello! I\'m your project mascot.';
});

greetButton.addEventListener('click', () => {
    mascotGreeting.textContent = 'Hi there! How can I assist you today?';
});
const featuresList = document.querySelector('.features ul');
const features = [
    'Fun Animations',
    'Useful Information',
    'Quick Links',
    'Games and Challenges',
];

features.forEach((feature) => {
    const li = document.createElement('li');
    li.textContent = feature;
    featuresList.appendChild(li);
});