const liczba_a = document.querySelector('#a')
const liczba_b = document.querySelector('#b')
const wynik = document.querySelector('#wynik')
const btn = document.querySelector('#btn')

function obliczBMI (a, b) {
    return a / Math.pow((b / 100), 2);
}

function klasyfikacja (bmi) {
    if (bmi < 16) {
        return "Wygłodzenie"
    } else if (bmi >= 16 && bmi < 17) {
        return "Wychudzenie"
    } else if (bmi >= 17 && bmi < 18.5) {
        return "Niedowaga"
    } else if (bmi >= 18.5 && bmi < 25) {
        return "Optimum"
    } else if (bmi >= 25 && bmi < 30) {
        return "Nadwaga"
    } else if (bmi >= 30 && bmi < 35) {
        return "Otyłość I stopnia"
    } else if (bmi >= 35 && bmi < 40) {
        return "Otyłość II stopnia"
    } else {
        return "Otyłość III stopnia"
    }
}

btn.addEventListener('click', function (){
    let a = parseFloat(liczba_a.value)
    let b = parseFloat(liczba_b.value)
    let bmi = Math.round((obliczBMI(a,b))*100)/100
    wynik.innerHTML = `<p>Twoje BMI wynosi: <b>${bmi}</b><br>Jesteś w przedziale: <b>${klasyfikacja(bmi)}</b></p>`

})