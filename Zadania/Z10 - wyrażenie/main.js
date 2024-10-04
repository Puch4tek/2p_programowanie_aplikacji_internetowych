const liczba_x = document.querySelector('#x');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    let x = parseFloat(liczba_x.value);
    let wyrazenie = x/Math.pow(1+Math.abs(x), 2);

    wynik.innerHTML =
        `
        <p>Wartość wyrażenia wynosi: <b>${wyrazenie}</b></p> 
        `
})