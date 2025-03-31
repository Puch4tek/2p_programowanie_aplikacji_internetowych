document.querySelector('#btn').addEventListener('click', () => {
    const radio = document.querySelector('input[name="dlugosc"]:checked');
    let wartosc;
    switch(radio.value) {
        case 'krotkie':
            wartosc = 25;
            break;
        case 'srednie':
            wartosc = 30;
            break;
        case 'poldlugie':
            wartosc = 40
            break;
        case 'dlugie':
            wartosc = 50;
            break;
    }
    document.querySelector('#wynik').textContent = `Cena strzyżenia: ${wartosc}`;
});