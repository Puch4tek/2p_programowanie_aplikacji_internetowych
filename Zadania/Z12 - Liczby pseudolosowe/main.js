const liczba_min = document.querySelector('#min')
const liczba_max = document.querySelector('#max')

const wynik = document.querySelector('#wynik')
const btn = document.querySelector('button')

btn.addEventListener('click', () => {
    let min = parseInt(liczba_min.value);
    let max = parseInt(liczba_max.value);
    let random1 = Math.floor(Math.random() * (max - min) + min);
    let random2 = Math.floor(Math.random() * (max - min) + min);
    let random3 = Math.floor(Math.random() * (max - min) + min);
    let random4 = Math.floor(Math.random() * (max - min) + min);
    let random5 = Math.floor(Math.random() * (max - min) + min);
    let suma = random1 + random2 + random3 + random4 + random5;
    let iloczyn = random1 * random2 * random3 * random4 * random5;
    let srednia = (random1 + random2 + random3 + random4 + random5) / 5;

    wynik.innerHTML =
        `
        <p>Liczba 1 = <b>${random1}</b><br>
        Liczba 2 = <b>${random2}</b><br>
        Liczba 3 = <b>${random3}</b><br>
        Liczba 4 = <b>${random4}</b><br>
        Liczba 5 = <b>${random5}</b><br><br>
        Suma tych liczb to: <b>${suma}</b><br>
        Iloczyn tych liczb to: <b>${iloczyn}</b><br>
        Średnia tych liczb to: <b>${srednia}</b><br></p>
        `
})