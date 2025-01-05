class Czolg {
    constructor(nazwa, kolor, iloscAmunicji) {
        this.nazwa = nazwa;
        this.kolor = kolor;
        this.iloscAmunicji = iloscAmunicji;
    }

    // Metoda wyświetlająca informacje o obiekcie
    info() {
        return `Czołg "${this.nazwa}": kolor - ${this.kolor}, ilość amunicji - ${this.iloscAmunicji}<br><br>`;
    }

    // Metoda do zmiany koloru czołgu
    zmienKolor(nowyKolor) {
        this.kolor = nowyKolor;
        document.write(`Kolor czołgu "${this.nazwa}" zmieniono na ${this.kolor}. <br><br>`);
    }

    // Metoda do zmiany stanu amunicji
    zmienAmunicje(nowaIloscAmunicji) {
        if (nowaIloscAmunicji < 0) {
            document.write(`Ilość amunicji nie może być ujemna! <br><br>`);
            return;
        }
        this.iloscAmunicji = nowaIloscAmunicji;
        document.write(`Ilość amunicji w czołgu "${this.nazwa}" zmieniona na ${this.iloscAmunicji}. <br><br>`);
    }

    // Metoda do wystrzelenia
    wystrzel() {
        if (this.iloscAmunicji > 0) {
            this.iloscAmunicji--;
            document.write(`Czołg "${this.nazwa}" wystrzelił! Pozostało ${this.iloscAmunicji} sztuk amunicji. <br><br>`);
        } else {
            document.write(`Czołg "${this.nazwa}" nie może wystrzelić, brak amunicji! <br><br>`);
        }
    }
}

// Przykład użycia
const czolg1 = new Czolg("Pantera", "zielony", 10);

document.write(czolg1.info());

czolg1.zmienKolor("kamuflażowy");

document.write(czolg1.info());

czolg1.zmienAmunicje(5);
czolg1.wystrzel();
czolg1.wystrzel();
czolg1.zmienAmunicje(0);
czolg1.wystrzel();
