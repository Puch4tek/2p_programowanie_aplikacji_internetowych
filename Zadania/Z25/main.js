const liczba_a1 = document.querySelector('#a1');
const liczba_b1 = document.querySelector('#b1');
const liczba_c1 = document.querySelector('#c1');
const liczba_a2 = document.querySelector('#a2');
const liczba_b2 = document.querySelector('#b2');
const liczba_c2 = document.querySelector('#c2');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    let a1 = parseFloat(liczba_a1.value());
    let b1 = parseFloat(liczba_b1.value());
    let c1 = parseFloat(liczba_c1.value());
    let a2 = parseFloat(liczba_a2.value())
    let b2 = parseFloat(liczba_b2.value())
    let c2 = parseFloat(liczba_c2.value())
    let y = (c2*a1-c1*a2)/(b2*a1 - a2*b1)
    let x = (c1-b1*y)/(a1)

    wynik.innerHTML = 
        `
        <p>
        a<sub>1</sub> = ${a1}<br>
        b<sub>1</sub> = ${b1}<br>
        c<sub>1</sub> = ${c1}<br>
        a<sub>2</sub> = ${a2}<br>
        b<sub>2</sub> = ${b2}<br>
        c<sub>2</sub> = ${c2}<br><br>
        <b>x = ${x}</b><br>
        <b>y = ${y}</b><br>
        </p>
        `

})