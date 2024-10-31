const liczba_a = document.querySelector('#a');
const liczba_b = document.querySelector('#b');
const btn = document.querySelector('button');
const wynik = document.querySelector('#wynik');

btn.addEventListener('click', () => {
    let min = parseFloat(liczba_a.value);
    let max = parseFloat(liczba_b.value);
    let r1 = Math.floor(Math.random() * (max - min) + min);
    let r2 = Math.floor(Math.random() * (max - min) + min);

    if (r1 === r2) {
        wynik.innerHTML =
            `
            <p>
            Liczby losowane z zakresu od <b>${min}</b> do <b>${max}</b><br>
            Wylosowana liczba 1: <b>${r1}</b><br>
            Wylosowana liczba 2: <b>${r2}</b><br><br>
            <b>${r1} = ${r2}</b><br>
            </p>       
            `
    }
    else if (r1 > r2) {
        wynik.innerHTML =
            `
            <p>
            Liczby losowane z zakresu od <b>${min}</b> do <b>${max}</b><br>
            Wylosowana liczba 1: <b>${r1}</b><br>
            Wylosowana liczba 2: <b>${r2}</b><br><br>
            <b>${r1} > ${r2}</b><br>
            </p>       
            `

    }
    else if (r1 < r2) {
        wynik.innerHTML =
            `
            <p>
            Liczby losowane z zakresu od <b>${min}</b> do <b>${max}</b><br>
            Wylosowana liczba 1: <b>${r1}</b><br>
            Wylosowana liczba 2: <b>${r2}</b><br><br>
            <b>${r1} < ${r2}</b><br>
            </p>       
            `

    }

})