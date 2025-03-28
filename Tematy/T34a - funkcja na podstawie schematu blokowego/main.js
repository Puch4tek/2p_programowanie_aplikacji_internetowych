function nwd(a, b) {
    while (a !== b) {
        if (a > b) {
            a -= b;
        } else {
            b -= a;
        }
    }
    return a;
}

document.querySelector('#btn').addEventListener('click', () => {
    const a = parseInt(document.querySelector('#a').value);
    const b = parseInt(document.querySelector('#b').value);
    document.querySelector('#wynik').innerHTML = `<p>Wynik: <b>${nwd(a,b)}</b></p>`;
});