const liczba_a = document.querySelector('#a');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    let a = parseFloat(liczba_a.value);
    let mm = a * 25.3995;

    wynik.innerHTML =
        `
        <p>${a} cali to ${mm} mm</p>
        `
})