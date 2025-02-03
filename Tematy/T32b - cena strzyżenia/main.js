/*/Utwórz stronę html o nazwie fryzura.html. Strona powinna posiadać następującą zawartość:



Wymagania dotyczące skryptu:

    Napisany w języku wykonywanym po stronie przeglądarki
Uruchamia się po wciśnięciu przycisku na stronie fryzura.html
Podaje cenę strzyżenia w zależności od wyboru dokonanego przez pola radio zgodnie z cennikiem w tabeli
        ‒ Wyświetla wynik działania pod przyciskiem według wzoru: „Cena strzyżenia: <wartość>”, gdzie <wartość> oznacza cenę strzyżenia dla wskazanej długości włosów.
    Długość włosów/ Cena
    Krótkie 25 | Średnie 30 | Półdługie 40 | Długie 50    </p.>*/


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