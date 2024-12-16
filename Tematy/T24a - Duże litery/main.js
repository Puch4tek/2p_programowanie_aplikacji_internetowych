const pole_a = document.querySelector('#a');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    let string = pole_a.value.toLowerCase();
    let[name, surname] = string.split(' ');
    function capitalize(word) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
    let formattedName = capitalize(name);
    let formattedSurname = capitalize(surname);

    wynik.innerHTML = `<p>Twoje imię to: ${formattedName}. Twoje nazwisko to: ${formattedSurname}</p>`
})