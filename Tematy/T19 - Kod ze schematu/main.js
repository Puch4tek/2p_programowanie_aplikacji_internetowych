const liczba_a = prompt('Wprowadź liczbę A: ');
const liczba_b = prompt('Wprowadź liczbę B: ');

const i_span = document.querySelector('#i')
const y_span = document.querySelector('#y')

let a = parseFloat(liczba_a);
let b = parseFloat(liczba_b);
console.log(a);
console.log(b);
let y, i;

if (a <= 0 && b <= 0) {
    y = 0
    i_span.innerHTML =`I = <b>1</b><br>`;
} else if (a <= 0 && b >= 0 ) {
    y = 1;
    i_span.innerHTML =`I = <b>2</b><br>`;
} else if (a > 0 && b <= 0) {
    y = 2;
    i_span.innerHTML =`I = <b>3</b><br>`;
} else {
    y = 3;
    i_span.innerHTML =`I = <b>4</b><br>`;
}
y_span.innerHTML = `Y = <b>${y}</b>`;