const liczba_a = document.querySelector('#a');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    wynik.innerHTML = '';
    let a = parseInt(liczba_a.value);
    for (let i = 1; i <= 15; i++) {
        if (i === a && a >= 1 && a <= 15) {
            wynik.innerHTML += '<b>{-} </b>';
            continue;
        }
        wynik.innerHTML += `<b>${i}</b> `;
    }
})