const liczba_x = document.querySelector('#x');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    let x = parseFloat(liczba_x.value);
    let radiany = x * (Math.PI/180);

    wynik.innerHTML =
        `
        <p>Wynik dla podanej wartości kątowej <b>${x}</b><sup>o</sup> = <b>${radiany} radianów</b></p>
        `
})