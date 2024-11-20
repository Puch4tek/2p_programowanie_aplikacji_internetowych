const liczba_x = document.querySelector('#x');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    let x = parseInt(liczba_x.value);
    switch (x) {
        case 1:
            wynik.innerHTML = `<p>Nazwa dnia tygodnia: <b>Poniedziałek</b></p>`;
            break;
        case 2:
            wynik.innerHTML = `<p>Nazwa dnia tygodnia: <b>Wtorek</b></p>`;
            break;
        case 3:
            wynik.innerHTML = `<p>Nazwa dnia tygodnia: <b>Środa</b></p>`;
            break;
        case 4:
            wynik.innerHTML = `<p>Nazwa dnia tygodnia: <b>Czwartek</b></p>`;
            break;
        case 5:
            wynik.innerHTML = `<p>Nazwa dnia tygodnia: <b>Piątek</b></p>`;
            break;
        case 6:
            wynik.innerHTML = `<p>Nazwa dnia tygodnia: <b>Sobota</b></p>`;
            break;
        case 7:
            wynik.innerHTML = `<p>Nazwa dnia tygodnia: <b>Niedziela</b></p>`;
            break;
        default:
            wynik.innerHTML = `<p>Liczba poza zakresem</p>`;
            break;
    }
})