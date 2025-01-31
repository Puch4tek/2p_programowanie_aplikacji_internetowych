const btn = document.querySelector('#btn');
const image = document.querySelector('#image');
const colorInput = document.querySelector('#color');
const sizeInput = document.querySelector('#size');

btn.addEventListener('click', () => {
    const color = colorInput.value;
    const size = sizeInput.value;
    image.style.border = `${size}px solid ${color}`;
});