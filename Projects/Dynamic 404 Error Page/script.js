const animationContainer = document.getElementById('animation-container');
const animation = document.getElementById('animation');

animationContainer.addEventListener('click', () => {
    animation.classList.add('animated');
    setTimeout(() => {
        animation.classList.remove('animated');
    }, 2000);
});
