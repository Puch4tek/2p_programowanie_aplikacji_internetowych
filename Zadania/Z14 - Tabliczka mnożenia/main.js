const liczba_x = document.querySelector('#x');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    let x = Math.floor(liczba_x.value);

    wynik.innerHTML =
        `
        <p>Tabliczka mnożenia dla liczby <b>${x}</b>: </p>
        <table>
        <tr>
        <th> </th>
        <th>1</th>
        <th>2</th>
        <th>3</th>
        <th>4</th>
        <th>5</th>
        <th>6</th>
        <th>7</th>
        <th>8</th>
        <th>9</th>
        <th>10</th>
        </tr>
        <td><b> ${x} </b></td>
        <td>${x}</td>
        <td>${x * 2}</td>
        <td>${x * 3}</td>
        <td>${x * 4}</td>
        <td>${x * 5}</td>
        <td>${x * 6}</td>
        <td>${x * 7}</td>
        <td>${x * 8}</td>
        <td>${x * 9}</td>
        <td>${x * 10}</td>
        </table>    
        `
})