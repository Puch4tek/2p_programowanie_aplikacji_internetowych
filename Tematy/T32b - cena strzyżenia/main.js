const selectedRadio = document.querySelector('input[name="dlugosc"]:checked');

// Funkcja obliczająca cenę strzyżenia
function obliczCeneStrzyzenia(dlugosc) {
    let cena;
    switch (dlugosc) {
        case "krotkie":
            cena = 25;
            break;
        case "srednie":
            cena = 30;
            break;
        case "poldlugie":
            cena = 40;
            break;
        case "dlugie":
            cena = 50;
            break;
        default:
            cena = 0; // Default case to handle unexpected values
    }
    return cena;
}

// Przypisanie zdarzenia do przycisku "Strzyżenie"
document.getElementById('strzyzenie').addEventListener('click', function() {
    if (selectedRadio) {
        let dlugosc = selectedRadio.value;
        let cena = obliczCeneStrzyzenia(dlugosc);
        document.getElementById('wynik').textContent = `Cena strzyżenia: ${cena}`;
    } else {

    }
});