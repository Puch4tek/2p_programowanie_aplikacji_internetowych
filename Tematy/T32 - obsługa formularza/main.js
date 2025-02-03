const dateInput = document.querySelector('#dateInput');
const dateOutput = document.querySelector('#dateOutput');
const range = document.querySelector('#range');
const color = document.querySelector('#color');
const grade = document.querySelector('#grade');

color.addEventListener('input', () => {
    console.log(color.value);
    document.querySelector('#h1').style.color = color.value;
    document.querySelector('#colorGrade2').style.color = color.value;
});

dateInput.addEventListener('input', () => {
    const date = new Date(dateInput.value);
    dateOutput.textContent = date.toISOString().slice(0, 10);
});

range.addEventListener('input', () => {
    grade.textContent = range.value.toString();
});


