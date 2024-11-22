const liczba_a = document.querySelector('#a');
const liczba_b = document.querySelector('#b');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    let a = parseFloat(liczba_a.value);
    let b = parseFloat(liczba_b.value);
    let res;

    if (b !== 0) {
        if (a % b === 0) {
            res = "TAK";
        } else if (a % b !== 0) {
            res = "NIE";
        } else if (a / b === 0) {
            res = "ZERO";
        }

    } else {
        res = "ZERO";
    }
    wynik.innerHTML =
        `
            <p>
            A = <b>${a}</b><br>
            B = <b>${b}</b><br>
            Odpowiedź: <b>${res}</b><br>
            </p>
            `
})
