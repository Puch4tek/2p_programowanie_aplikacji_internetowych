const liczba_a = document.querySelector('#a');
const liczba_b = document.querySelector('#b');

const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    let a = parseFloat(liczba_a.value);
    let b = parseFloat(liczba_b.value);
    let wzor = a * (b/100);

    wynik.innerHTML =
        `
        <p>Wartość: <b>${a}</b></p>
        <p>Procent: <b>${b}</b></p>
        <p>${b}% z ${a} to: <b>${wzor}</b></p>
        `
})