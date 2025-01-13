const wynik1 = document.querySelector('#wynik1');
const wynik2 = document.querySelector('#wynik2');
const btn = document.querySelector('#btn');

function fillRand (min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function createArr(n) {
    let tab = [];
    for(let i = 0; i < n; i++) {
        tab[i] = [];
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            tab[i][j] = fillRand(0, 9);
        }
    }
    return tab;
}

function displayArr(arr) {
    let rows = arr.length;
    let cols = arr[0].length;
    let result = "<table>";
    for (let i = 0; i < rows; i++) {
        result += "<tr>";
        for (let j = 0; j < cols; j++) {
            result += "<td>"+arr[i][j]+"<td/>";
        }
    }
    result+="<table/>";
    return result;
}

function przekatnaTablicy(arr) {
    let n = arr.length;
    let m = n - 1;
    let LG_PD = 0;
    let LD_PG = 0;
    for (let i = 0; i < n; i++) {
        LG_PD+=arr[i][i];
        LD_PG+=arr[m-i][i];
    }
    if (LG_PD===LD_PG) return `Suma Przekątnych jest równa i wynosi ${LG_PD}`;
    if (LG_PD>LD_PG) return `Suma LG_PD jest większa i wynosi ${LG_PD} > ${LD_PG}`;
    if (LD_PG>LG_PD) return `Suma LD_PG jest większa i wynosi ${LD_PG} > ${LG_PD}`;
}

let resultTab = createArr(3);
console.log(przekatnaTablicy(resultTab));

btn.addEventListener('click', () => {
    wynik1.innerHTML = displayArr(resultTab)
    wynik2.innerHTML = przekatnaTablicy(resultTab)
})