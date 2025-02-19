const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const form = document.querySelector('#form');
const imieNazwisko = form.elements.name;
const email = form.elements.email;
const telefon = form.elements.telephone;
const story = form.elements.story;
const color = form.elements.color.value;
const checkbox = form.elements.check1;
const size = form.elements.size;
const wynik = document.querySelector('#wynik');

console.log('click');

btn1.addEventListener('click', () => {
    const imieNazwisko = form.elements.name;
    const email = form.elements.email;
    const telefon = form.elements.telephone;
    const story = form.elements.story;
    const color = form.elements.color.value;
    const checkbox = form.elements.check1;
    const size = form.elements.size;
    console.log('click');
    const checkedBoxes = [...checkbox]
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);
    wynik.innerHTML =
        `
        <p>
        <fieldset>
        <legend>Podstawowe dane:</legend>
        Imie i nazwisko: ${imieNazwisko.value} <br>
        Email: ${email.value} <br>
        Telefon: ${telefon.value} <br>
        Opis: ${story.value} <br>
        </fieldset> <br>
        <fieldset>
        <legend>Własny projekt butów</legend>
        Kolor: ${color} <br>
        Rozmiar: ${size.value} <br>
        </fieldset>
        </p>
        `
});

btn2.addEventListener('click', () => {
   form.reset()
});