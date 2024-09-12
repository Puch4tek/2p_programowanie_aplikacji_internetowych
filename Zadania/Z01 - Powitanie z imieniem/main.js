const imie = document.querySelector('#imie')
const wynik = document.querySelector('#wynik')
const btn = document.querySelector('button')

btn.addEventListener('click', function (){
    let imie_tekst = imie.value
    //wynik.innerHTML = 'Witaj ' + imie_tekst + '!!!!!!!'
    wynik.innerHTML = `Witaj ${imie_tekst} !!!!! <br> Miło cię widzieć na naszej stronie`
})