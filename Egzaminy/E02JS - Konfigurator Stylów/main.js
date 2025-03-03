document.addEventListener('DOMContentLoaded', function() {
    // Zmiana koloru tła
    document.getElementById('indigoBtn').addEventListener('click', function() {
        changeBackground('Indigo');
    });
    document.getElementById('steelBlueBtn').addEventListener('click', function() {
        changeBackground('SteelBlue');
    });
    document.getElementById('oliveBtn').addEventListener('click', function() {
        changeBackground('Olive');
    });

    // Zmiana koloru czcionki
    document.getElementById('fontColor').addEventListener('change', changeFontColor);

    // Zmiana rozmiaru czcionki
    document.getElementById('fontSize').addEventListener('blur', changeFontSize);

    // Przełączanie ramki obrazu
    document.getElementById('border').addEventListener('click', toggleBorder);

    // Zmiana typu punktora listy
    const listTypeRadios = document.querySelectorAll('input[name="listType"]');
    listTypeRadios.forEach(function(radio) {
        radio.addEventListener('click', function() {
            changeListType(this.value);
        });
    });
});

function changeBackground(color) {
    document.getElementById('right').style.backgroundColor = color;
}

function changeFontColor() {
    const color = document.getElementById('fontColor').value;
    document.getElementById('right').style.color = color;
}

function changeFontSize() {
    const size = document.getElementById('fontSize').value;
    document.getElementById('right').style.fontSize = size;
}

function toggleBorder() {
    const img = document.querySelector('#right img');
    const checkbox = document.getElementById('border');
    if (checkbox.checked) {
        img.style.border = '1px solid white';
    } else {
        img.style.border = 'none';
    }
}

function changeListType(type) {
    const ul = document.querySelector('#right ul');
    ul.style.listStyleType = type;
}