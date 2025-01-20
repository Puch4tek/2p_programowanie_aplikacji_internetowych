const wynik1 = document.querySelector('#wynik1');
const wynik2 = document.querySelector('#wynik2');
const btn = document.querySelector('#btn');

function fillArray () {
    const rows = 7;
    const cols = 7;
    const letters = ['a', 'b', 'c', 'd', 'e'];
    const table = [];
    for (let i = 0; i < rows; i++) {
        table[i] = [];
        for (let j = 0; j < cols; j++) {
            table[i][j] = letters[Math.floor(Math.random() * letters.length)];
        }
    }
    return table;
}

function countingA (table) {
    let countA = 0;
    let rows = 7;
    let cols = 7;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (table[i][j] === 'a') {
                countA++;
            }
        }
    }
    return countA;
}

btn.addEventListener('click', () => {
    const table = fillArray();
    const countA = countingA(table);

    wynik2.innerHTML = `<p>Liczba wystąpień litery 'a': ${countA}</p>`;
});