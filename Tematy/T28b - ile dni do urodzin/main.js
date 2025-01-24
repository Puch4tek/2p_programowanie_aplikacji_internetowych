const wynik = document.querySelector('#wynik');
const btn = document.querySelector('#btn');
const data = document.querySelector('#data');

btn.addEventListener('click', () => {
    const date = new Date();
    const birthDate = new Date(data.value);
    birthDate.setFullYear(date.getFullYear());
    if (birthDate < date) {
        birthDate.setFullYear(date.getFullYear() + 1);
    }
    const diff = Math.abs(date - birthDate);
    const days = Math.round(diff / (1000 * 60 * 60 * 24) + 1);
    console.log(diff);
    wynik.innerHTML = `Ilość dni do urodzin: ${days}`;
});