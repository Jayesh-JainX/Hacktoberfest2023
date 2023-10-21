
const exploreButton = document.getElementById('explore-button');
exploreButton.addEventListener('click', () => {
    alert('Explore more about our project!');
});

exploreButton.addEventListener('mouseover', () => {
    exploreButton.style.backgroundColor = '#ff4b4b';
});

exploreButton.addEventListener('mouseout', () => {
    exploreButton.style.backgroundColor = '#ff6b6b';
});
