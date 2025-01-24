const wynik = document.querySelector('#wynik');
const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    const data = new Date();
    const domyslnyFormat = data.toString();

    const rzymskie = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];
    const formatRzymskie = `${data.getDate()}.${rzymskie[data.getMonth()]}.${data.getFullYear()}`;

    const polskieMiesiace = ['stycznia', 'lutego', 'marca', 'kwietnia', 'maja', 'czerwca', 'lipca', 'sierpnia', 'września', 'października', 'listopada', 'grudnia'];
    const polskiFormat = `${data.getDate()} ${polskieMiesiace[data.getMonth()]} ${data.getFullYear()}`;

    wynik.innerHTML = `${domyslnyFormat} <br>`;
    wynik.innerHTML += `${formatRzymskie} <br>`;
    wynik.innerHTML += `${polskiFormat}`;
});


