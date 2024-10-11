const liczba_a = document.querySelector('#a');
const liczba_b = document.querySelector('#b');
const liczba_h = document.querySelector('#h');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    let a = parseInt(liczba_a.value);
    let b = parseFloat(liczba_b.value);
    let h = parseFloat(liczba_h.value);
    let pole = ((a+b)/2) * h;

    wynik.innerHTML =
        `
        <p>
        A = <b>${a}</b> <br>
        B = <b>${b}</b> <br>
        H = <b>${h}</b> <br><br>
        Pole trapezu jest równe: <b>${pole.toFixed(2)}</b>
        </p>
        `
})