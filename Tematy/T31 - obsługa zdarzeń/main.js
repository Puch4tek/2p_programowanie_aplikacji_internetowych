const div = document.querySelector('#wynik');
const data = new Date();

let isFirst = true;

div.addEventListener('mouseover', () => {
    div.innerHTML = isFirst ? data.toString() : 'Data już była ;)';
    isFirst = false;
});

div.addEventListener('mouseout', () => {
    div.innerHTML = '';
});