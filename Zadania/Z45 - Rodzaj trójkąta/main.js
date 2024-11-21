const liczba_a = document.querySelector('#a');
const liczba_b = document.querySelector('#b');
const liczba_c = document.querySelector('#c');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    let a = parseFloat(liczba_a.value);
    let b = parseFloat(liczba_b.value);
    let c = parseFloat(liczba_c.value);
    let rodzaj;
    if (a + b > c && a + c > b && b + c > a) {
        if (a*a + b*b === c*c) {
            rodzaj = "prostokątny"
        } else if (a*a + b*b > c*c) {
            rodzaj = "ostrokątny";
        } else if (a*a + b*b < c*c) {
            rodzaj = "rozwartokątny";
        } else {
            rodzaj = "żaden z wymienionych";
        }
        wynik.innerHTML =
            `
            <p>
            A = <b>${a}</b><br>                
            B = <b>${b}</b><br>                
            C = <b>${c}</b><br>                
            Trójkąt jest <b>${rodzaj}</b><br>
            </p>
            `
    } else {
        wynik.innerHTML = `<p>Podane wartości <b>nie tworzą trójkąta</b></p>`
    }

})