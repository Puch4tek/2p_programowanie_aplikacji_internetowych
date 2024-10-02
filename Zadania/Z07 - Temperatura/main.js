const liczba_a = document.querySelector('#a');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    let a = parseInt(liczba_a.value);
    let F  = (9/5) * a + 32;
    let K = a + 273.15;

    wynik.innerHTML =
        `
        Wynik obliczeń dla T<sub>Celsjusz</sub> = <b>${a}</b> <br>
        Wynik T<sub>Kelvin</sub> = <b>${K}</b> <br>
        Wynik T<sub>Fahrenheit</sub> = <b>${F}</b> <br>
        `
})