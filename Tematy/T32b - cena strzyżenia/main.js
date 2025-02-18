function obliczCeneStrzyzenia(dlugosc) {
    let cena;
    switch (dlugosc) {
        case "1":
            cena = 25;
            break;
        case "2":
            cena = 30;
            break;
        case "3":
            cena = 40;
            break;
        case "4":
            cena = 50;
            break;
        default:
            cena = 0;
    }
    return cena;
}

document.getElementById('strzyzenie').addEventListener('click', function() {
    const selectedRadio = document.querySelector('input[name="dlugosc"]:checked');

    if (selectedRadio) {
        let dlugosc = selectedRadio.value;
        let cena = obliczCeneStrzyzenia(dlugosc);
        document.getElementById('wynik').textContent = `Cena strzyżenia: ${cena} zł`;
    } else {
        document.getElementById('wynik').textContent = "Wybierz długość włosów!";
    }
});
