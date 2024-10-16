const liczba_a = document.querySelector('#a');
const liczba_b = document.querySelector('#b');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('#btn');

btn.addEventListener('click', (e) => {
    let a = parseFloat(liczba_a.value);
    let b = parseFloat(liczba_b.value);
    let h = Math.pow(b, 2) - Math.pow((a / 2) ,2)

    wynik.innerHTML =
        `
        <p>
        A = <b>${a}</b><br>
        B = <b>${b}</b><br><br>
        Wynik wynosi: <b>${Math.sqrt(h)}</b>
        </p>
        `
})