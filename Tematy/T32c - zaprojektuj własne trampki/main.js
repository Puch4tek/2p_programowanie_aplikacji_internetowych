const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const form = document.querySelector('#form');
const wynik = document.querySelector('#wynik');

function colorText(checked) {
    let color;
    switch (checked) {
        case 'red':
            color = "Czerwony";
            break;
        case 'blue':
            color = "Niebieski";
            break;
        case 'black':
            color = "Czarny";
            break;
        case 'silver':
            color = "Srebrny";
            break;
        default:
            color = "Niepoprawny";
            break;
    }
    return color;
}

btn1.addEventListener('click', () => {
    const name = form.elements.name;
    const email = form.elements.email;
    const telefon = form.elements.telephone;
    const story = form.elements.story;
    const color = colorText(form.elements.color.value);
    const checkbox = form.elements.check1;
    const size = form.elements.size;
    console.log('click');
    const checkedBoxes = [...checkbox]
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);
    const checkedOptions = [...checkbox].filter(checkbox => checkbox.checked).map(checkbox => checkbox.labels[0].textContent);
    let checkedOptionsHtml = '';
    checkedOptions.forEach(option => {
        checkedOptionsHtml += `<li>${option}</li> `;
    });
    wynik.innerHTML =
        `
        <p>
        <fieldset>
        <legend>Podstawowe dane:</legend>
        Imie i nazwisko: ${name.value} <br>
        Email: ${email.value} <br>
        Telefon: ${telefon.value} <br>
        Opis: ${story.value} <br>
        </fieldset> <br>
        <fieldset>
        <legend>Własny projekt butów</legend>
        Kolor: ${color} <br>
        Wybrane opcje: <ul> ${checkedOptionsHtml} </ul>
        Rozmiar: ${size.value} <br>
        </fieldset>
        </p>
        `
});

btn2.addEventListener('click', () => {
    form.reset()
});