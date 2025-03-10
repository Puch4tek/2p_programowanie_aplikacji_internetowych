document.querySelector('#btn').addEventListener('click', () => {
    var h = document.getElementById('h-value').value;
    if (h < 0 || h > 360) {
        alert('Wartość H musi być między 0 a 360');
        return;
    }
    var table = document.querySelector('table');
    var rows = table.rows;
    var mainCell = rows[0].cells[0];
    mainCell.style.backgroundColor = 'hsl(' + h + ', 100%, 50%)';
    var sValues = [80, 60, 40, 20];
    for (var i = 0; i < 4; i++) {
        var cell = rows[1].cells[i];
        cell.style.backgroundColor = 'hsl(' + h + ', ' + sValues[i] + '%, 50%)';
    }
});