const liczba_x = document.querySelector('#x');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    let x = parseInt(liczba_x.value);
    switch (x) {
        case 0:
            wynik.innerHTML =
                `<p>
                Podana liczba to: <b>${x}</b> <br>
                Nazwa oceny: <b>Nieklasyfikowany</b> <br>
                </p>
                `
            break;
        case 1:
            wynik.innerHTML =
                `<p>
                Podana liczba to: <b>${x}</b> <br>
                Nazwa oceny: <b>Poprawny</b> <br>
                </p>
                `
            break;
        case 2:
            wynik.innerHTML =
                `<p>
                Podana liczba to: <b>${x}</b> <br>
                Nazwa oceny: <b>Poprawny</b> <br>
                </p>
                `;
            break;
        case 3:
            wynik.innerHTML =
                `<p>
                Podana liczba to: <b>${x}</b> <br>
                Nazwa oceny: <b>Poprawny</b> <br>
                </p>
                `;
            break;
        case 4:
            wynik.innerHTML =
                `<p>
                Podana liczba to: <b>${x}</b> <br>
                Nazwa oceny: <b>Dobry</b> <br>
                </p>
                `;
            break;
        case 5:
            wynik.innerHTML =
                `<p>
                Podana liczba to: <b>${x}</b> <br>
                Nazwa oceny: <b>Dobry</b> <br>
                </p>
                `;
            break;
        case 6:
            wynik.innerHTML =
                `<p>
                Podana liczba to: <b>${x}</b> <br>
                Nazwa oceny: <b>Wyróżniający</b> <br>
                </p>
                `;
            break;
        default:
            wynik.innerHTML = `<p><b>Niewłaściwa liczba</b></p>`;
            break;
    }
})