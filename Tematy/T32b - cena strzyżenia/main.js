// Funkcja obliczająca cenę strzyżenia
function obliczCeneStrzyzenia(dlugosc) {
    let cena;
    switch (dlugosc) {
        case "krótkie":
            cena = 25;
            break;
        case "średnie":
            cena = 30;
            break;
        case "półdługie":
            cena = 40;
            break;
        case "długie":
            cena = 50;
            break;
    }
    return cena;
}

// Przypisanie zdarzenia do przycisku "Strzyżenie"
document.getElementById('strzyżenie').addEventListener('click', function() {
    let dlugosc = document.querySelector('input[name="dlugosc"]:checked').value;
    let cena = obliczCeneStrzyzenia(dlugosc);
    document.getElementById('wynik').textContent = `Cena strzyżenia: ${cena}`;
});