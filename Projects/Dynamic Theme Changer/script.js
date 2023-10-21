function changeTheme(themeName) {
    const themeStylesheet = document.getElementById('theme-stylesheet');
    themeStylesheet.href = themeName;

    if (localStorage) {
        localStorage.setItem('selected-theme', themeName);
    }
}


function toggleAnimation() {
    const body = document.body;
    body.classList.toggle('animated');

    if (localStorage) {
        const isAnimated = body.classList.contains('animated');
        localStorage.setItem('animation-enabled', isAnimated);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('selected-theme');
    if (savedTheme) {
        changeTheme(savedTheme);
    }

    const savedAnimation = localStorage.getItem('animation-enabled');
    if (savedAnimation === 'true') {
        toggleAnimation();
    }
});

