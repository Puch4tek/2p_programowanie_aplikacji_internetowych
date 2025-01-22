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

function countingMaxBRows (table) {
    let maxCount = 0;
    let rowI = -1;
    let rows = 7;
    let cols = 7;
    for (let i = 0; i < rows; i++) {
        let countB = 0;
        for (let j = 0; table[i][j] !== undefined; j++) {
            if (table[i][j] === 'b') {
                countB++;
            }
        }
        if (countB > maxCount) {
            maxCount = countB;
            rowI = i;
        }
    }
    return rowI;
}

btn.addEventListener('click', () => {
    const table = fillArray();
    const countA = countingA(table);
    const countB = countingMaxBRows(table);
    wynik1.innerHTML = `<p>Tablica:</p><pre>${table.map(row => row.join(' ')).join('\n')}</pre>`;
    wynik2.innerHTML = `<p>Liczba wystąpień litery 'a': ${countA}</p>`;
    wynik2.innerHTML += `<p>Najwięcej 'b' znajduje się w wierszu: ${countB}</p>`;

});