const liczba_a = document.querySelector('#a');
const liczba_b = document.querySelector('#b');
const btn = document.querySelector('button');
const wynik = document.querySelector('#wynik');

btn.addEventListener('click', () => {
    let a = parseFloat(liczba_a.value);
    let b = parseFloat(liczba_b.value);

    let cal = Math.floor(a / b);
    let l = a % b;
    if (b !== 0) {
        if (cal === 0) {
            wynik.innerHTML =
                `
            <p>
            Odpowiedź dla wartości: <br>
            Licznik: <b>${a}</b><br>
            Mianownik: <b>${b}</b><br><br>
            <b><sup>${l}</sup>/<sub>${b}</sub></b>
            </p>
            `
        }
        if (l === 0) {
            wynik.innerHTML =
                `
            <p>
            Odpowiedź dla wartości: <br>
            Licznik: <b>${a}</b><br>
            Mianownik: <b>${b}</b><br><br>
            <b>${cal}</b>
            </p>
            `
        }
        else {
            wynik.innerHTML =
                `
            <p>
            Odpowiedź dla wartości: <br>
            Licznik: <b>${a}</b><br>
            Mianownik: <b>${b}</b><br><br>
            <b>${cal}<sup>${l}</sup>/<sub>${b}</sub></b>
            </p>
            `
        }
    }
    else {
        wynik.innerHTML =
            `<p><b>Mianownik nie może być zerem</b></p>`
    }
})