document.querySelector('#submit').addEventListener('click', function () {
    let imie = document.querySelector('#imie').value;
    let nazwisko = document.querySelector('#nazwisko').value;
    let email = document.querySelector('#email').value.toLowerCase();
    let usluga = document.querySelector('#usluga').value;
    document.querySelector('#wynik').innerHTML = imie + ' ' + nazwisko + '<br>' + email + '<br>Usługa: ' + usluga;
});
