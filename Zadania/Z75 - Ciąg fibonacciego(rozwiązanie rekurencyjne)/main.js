const input_n = document.querySelector('#n');
const btn = document.querySelector('#btn');
const wynik = document.querySelector('#wynik')

function fib(n) {
    if (n === 0) return 0;
    else if (n === 1) return 1;
    else return fib(n-1) + fib(n-2)
}

btn.addEventListener('click', () => {
   let n = parseInt(input_n.value);
   let ciag_fib = [];
   for (let i = 0; i <= n; i++) {
       ciag_fib.push(fib(i));
   }
   for (let i = 0; i < ciag_fib.length; i++) {
       wynik.innerHTML += (`F[${i}]` + '=' + ciag_fib[i] + `<br>`)
   }
});