const liczba_s = document.querySelector('#a');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    let s = parseInt(liczba_s.value);
    let godziny = Math.floor(s / 3600);
    let minuty = Math.floor((s % 3600) / 60);
    let sekundy = s % 60;

    wynik.innerHTML =
        `
        <p>Wynik: </p> ${godziny} g ${minuty} m ${sekundy} s
        `
})