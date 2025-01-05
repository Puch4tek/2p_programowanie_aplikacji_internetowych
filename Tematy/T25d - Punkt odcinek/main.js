class Punkt {
    constructor(nazwa, x, y) {
        this.nazwa = nazwa;
        this.x = x;
        this.y = y;
    }

    info() {
        return `Punkt ${this.nazwa}: (${this.x}, ${this.y})`;
    }
}

class Odcinek {
    constructor(punktPoczatkowy, punktKoncowy) {
        this.punktPoczatkowy = punktPoczatkowy;
        this.punktKoncowy = punktKoncowy;
    }

    dlugoscOdcinka() {
        const dx = this.punktKoncowy.x - this.punktPoczatkowy.x;
        const dy = this.punktKoncowy.y - this.punktPoczatkowy.y;
        return Math.sqrt(dx * dx + dy * dy);
    }

    info() {
        return `Odcinek od ${this.punktPoczatkowy.info()} do ${this.punktKoncowy.info()}, długość: ${this.dlugoscOdcinka().toFixed(2)}`;
    }
}

// Przykład użycia:
const punktA = new Punkt("A", 0, 0);
const punktB = new Punkt("B", 3, 4);
const odcinek = new Odcinek(punktA, punktB);

document.write(punktA.info() + '<br>');
document.write(punktB.info() + '<br>');
document.write(odcinek.info() + '<br>');
