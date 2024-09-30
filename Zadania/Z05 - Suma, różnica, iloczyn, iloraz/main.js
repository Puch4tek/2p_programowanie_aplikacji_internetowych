const liczba_a = document.querySelector('#a')
const liczba_b = document.querySelector('#b')
const wynik = document.querySelector('#wynik')
const btn = document.querySelector('button')

btn.addEventListener('click', function(){
    let a = parseInt(liczba_a.value)
    let b = parseInt(liczba_b.value)

    let suma = a + b;
    let roznica = a - b;
    let iloczyn = a * b;
    let iloraz =  a / b;
    let ilorazrz = Math.floor(a / b);
    let modulo = a % b;

    wynik.innerHTML =
        `
        A jest równe <b>${a}</b> <br>
        B jest równe <b>${b}</b> <br><br>
        Suma podanych liczb to <b>${suma}</b> <br>
        Różnica podanych liczb to <b>${roznica}</b> <br> 
        Iloczyn podanych liczb to <b>${iloczyn}</b> <br>
        Iloraz podanych liczb to <b>${iloraz}</b> <br>
        Iloraz całkowity liczb to <b>${ilorazrz}</b> <br>
        Modulo podanych liczb to <b>${modulo}</b> <br>
        `
})