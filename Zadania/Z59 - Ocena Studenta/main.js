const liczba_a = document.querySelector('#a');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('#btn');

btn.addEventListener('click', e => {
    let p = parseInt(liczba_a.value);
    let x1 = Math.floor(p/10);
    let ocena = 0;
    if (p >= 0 && p <= 100) {
        switch (x1) {
            case 5:
                ocena = 3;
                break;
            case 6:
                ocena = 3.5;
                break;
            case 7:
                ocena = 4;
                break;
            case 8:
                ocena = 4.5
                break;
            case 9:
                ocena = 5;
                break;
            case 10:
                ocena = 5;
                break;
            default:
                ocena = 2;
                break;
        }
        wynik.innerHTML = `<p>Ocena studenta to: <b>${ocena}</b></p>`
    }
    else {
        wynik.innerHTML = `<p>Wynik studenta jest nieprawidłowy</p>`
    }
})