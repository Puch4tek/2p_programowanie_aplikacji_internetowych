const liczba_a = document.querySelector('#a');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    wynik.innerHTML = '';
    let a = parseInt(liczba_a.value);
    for (let i = 1; i <= 30; i++) {
        wynik.innerHTML += `<b>${i}</b> `;
        if (i === a && a >= 1 && a <= 30) {
            break;
        }
    }
})