const a = document.querySelector('#a')
const b = document.querySelector('#b')
const c = document.querySelector('#c')
const d = document.querySelector('#d')
const wynik = document.querySelector('#wynik')
const btn = document.querySelector('button')

btn.addEventListener('click', function(){
    let liczba_a = parseFloat(a.value)
    let liczba_b = parseFloat(b.value)
    let liczba_c = parseFloat(c.value)
    let liczba_d = parseFloat(d.value)

    let srednia_geometryczna = Math.pow((liczba_a * liczba_b * liczba_c*liczba_d), 0.25)
    console.log(srednia_geometryczna)
    wynik.innerHTML =
        `
        A = <b>${liczba_a}</b> <br>
        B = <b>${liczba_b}</b> <br>
        C = <b>${liczba_c}</b> <br>
        D = <b>${liczba_d}</b> <br>
        Średnia geometryczna = <b>${srednia_geometryczna}</b><br>
        Średnia geometryczna zakrąglona = <b>${srednia_geometryczna.toFixed(3)}</b><br>
        `
})