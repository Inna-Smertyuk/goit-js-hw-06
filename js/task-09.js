const buttonEl = document.querySelector('.change-color');
const colorName = document.querySelector('.color');

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


buttonEl.addEventListener('click', () => {

    const getRandomColor = getRandomHexColor();

    document.body.style.background = getRandomColor;
    colorName.textContent = getRandomColor;
});