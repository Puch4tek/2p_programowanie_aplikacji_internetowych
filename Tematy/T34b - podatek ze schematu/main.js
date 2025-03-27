

document.querySelector('#btn').addEventListener('click', () => {
    const cena = document.querySelector('#kwota').value;
    const typ = document.querySelector('#typ').value;;
    let podatek;
    if (cena < 200) {
        podatek = 0;
    } else {
        if (cena <= 1000) {
            if (typ === 'd') {
                podatek = cena * (0.15 - 0.05);
            } else {
                podatek = cena * 0.15;
            }
        } else {
            if (typ === 'd') {
                podatek = cena * (0.22 - 0.05);
            } else {
                podatek = cena * 0.22;
            }
        }
    }
    document.querySelector('#wynik').innerHTML = `<p>Cena: <b>${cena}</b> <br> Typ: <b>${typ}</b> <br> Podatek: <b>${podatek}</b></p>`
});