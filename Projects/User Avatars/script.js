const avatar = document.getElementById('userAvatar');
const avatarContent = document.querySelector('.avatar-content');
const changeColorButton = document.getElementById('changeColor');
const rotateButton = document.getElementById('rotate');

avatar.addEventListener('click', () => {
    avatarContent.style.display = 'block';
});

changeColorButton.addEventListener('click', () => {
    const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    avatar.style.backgroundColor = randomColor;
});

rotateButton.addEventListener('click', () => {
    if (!avatar.style.animation || avatar.style.animation === 'none') {
        avatar.style.animation = 'rotate 2s linear infinite';
    } else {
        avatar.style.animation = 'none';
    }
});

avatar.addEventListener('animationiteration', () => {
    avatar.style.animation = 'none';
});
