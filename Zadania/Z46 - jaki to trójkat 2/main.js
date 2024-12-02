const liczba_a = document.querySelector('#a');
const liczba_b = document.querySelector('#b');
const liczba_c = document.querySelector('#c');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    let a = parseFloat(liczba_a.value);
    let b = parseFloat(liczba_b.value);
    let c = parseFloat(liczba_c.value);
    let highest = Math.max(a,b,c);
    let inna1, inna2, rodzaj;
    if (a + b > c && a + c > b && b + c > a) {
        if (a === highest) {
            inna1 = b;
            inna2 = c;
        } else if (b === highest) {
            inna1 = a;
            inna2 = c;
        } else if (c === highest) {
            inna1 = a;
            inna2 = b;
        }

        if (Math.pow(inna1,2) + Math.pow(inna2, 2) === Math.pow(highest, 2)) {
            rodzaj = "prostokątny";
        } else if (Math.pow(inna1,2) + Math.pow(inna2, 2) > Math.pow(highest, 2)) {
            rodzaj = "ostrokątny";
        } else if (Math.pow(inna1,2) + Math.pow(inna2, 2) < Math.pow(highest, 2)) {
            rodzaj = "rozwartokątny";
        } 
        if (a === b && a === c && b === c ) {
            rodzaj = "równoboczny";
        } else if (b === c || a === c || a === b) {
            rodzaj = "równoramienny"
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

