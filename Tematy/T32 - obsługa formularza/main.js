/*
Zadanie polega na stworzeniu aplikacji JavaScript według wzoru pokazanego na grafice. Zwróć uwagę, że nagłówek h1 "Ustalenie wartości za pomocą suwaka" - zmienia kolor na taki, jaki został wybrany przez użytkownika w polu "Ocena kolorem". Również łańcuch znaków "ocena kolorem", powinien być zapisany w wybranym kolorze.*/

const wynik = document.querySelector('#wynik');

const h1 = document.createElement('h2');
h1.textContent = 'Ustalenie wartości za pomocą suwaka';
wynik.appendChild(h1);

const input = document.createElement('input');
input.setAttribute('type', 'range');
input.setAttribute('min', '0');
input.setAttribute('max', '255');
input.setAttribute('value', '0');
wynik.appendChild(input);

const div = document.createElement('h2');
div.textContent = 'ocena kolorem';
wynik.appendChild(div);

input.addEventListener('input', () => {
    div.style.color = `rgb(${input.value}, 0, 0)`;
    div.textContent = `ocena kolorem`;

});


