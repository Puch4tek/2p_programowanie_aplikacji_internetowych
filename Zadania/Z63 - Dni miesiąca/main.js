const liczba_x = document.querySelector('#x');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    let x = parseInt(liczba_x.value);
    let y;
    if (x >= 1 && x <= 12) {
        switch (x) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                y = 31;
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                y = 30;
                break;
            case 2:
                y = 28;
                break;
        }
        wynik.innerHTML = `<p>Liczba dni w tym miesiącu to: <b>${y}</b> <br>`
    }
})