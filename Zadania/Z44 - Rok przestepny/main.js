const liczba_a = document.querySelector('#a');
const btn = document.querySelector('button');
const wynik = document.querySelector('#wynik');

btn.addEventListener('click', (e) => {
    let rok = parseInt(liczba_a.value);
    if (rok % 4 === 0 && rok % 100 !== 0 || rok % 400 === 0) {
        wynik.innerHTML =
            `
            <p>Rok <b>${rok} jest przestępny</b></p>
            `
    }
    else {
        wynik.innerHTML =
            `
            <p>Rok <b>${rok} nie jest przestępny</b></p>
            `
    }
})