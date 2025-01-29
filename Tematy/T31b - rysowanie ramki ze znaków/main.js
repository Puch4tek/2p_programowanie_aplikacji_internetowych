/*
Wykonaj aplikację rysującą ramkę ze znaków jak w podanym wzorze poniżej. Danymi są a i b jako wymiary ramki. W zadaniu użyj własnych funkcji. Działanie przypisz jako zdarzenie do przycisku "Rysuj".
*/

const wynik = document.querySelector('#wynik');
const btn = document.querySelector('#btn');
const inputA = document.querySelector('#a');
const inputB = document.querySelector('#b');

const rysujRamke = (a, b) => {
    let result = '';
    for (let i = 0; i < a; i++) {
        for (let j = 0; j < b; j++) {
            if (i === 0 || i === a - 1 || j === 0 || j === b - 1) {
                result += '|';
            } else {
                result += '\xa0';
            }
        }
        result += '<br>';
    }
    return result;
}

btn.addEventListener('click', () => {
    const a = parseInt(inputA.value);
    const b = parseInt(inputB.value);

    wynik.innerHTML = rysujRamke(a, b);
});




