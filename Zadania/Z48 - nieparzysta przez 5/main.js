const liczba_x = document.querySelector('#x');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    let x = parseFloat(liczba_x.value);

    if (x % 5 === 0 && x % 2 !== 0) {
        wynik.innerHTML = `<p><b>Tak</b></p>`;
    } else {
        wynik.innerHTML = `<p><b>Nie</b></p>`;
    }

})
