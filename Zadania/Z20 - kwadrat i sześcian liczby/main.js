const liczba_x = document.querySelector('#x');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    let x = parseInt(liczba_x.value);
    let kwadrat = Math.pow(x, 2);
    let szescian = Math.pow(x, 3);

    wynik.innerHTML =
        `
        <p><b>${x}<sup>2</sup></b> jest równe: <b>${kwadrat}</b></p>
        <p><b>${x}<sup>3</sup></b> jest równe: <b>${szescian}</b></p>
        `
})