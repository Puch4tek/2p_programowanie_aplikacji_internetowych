let a = 4000;
let godziny = Math.floor(a / 3600);
let minuty = Math.floor((a % 3600)  / 60);
let sekundy = a % 60;
console.log(a, godziny, minuty, sekundy);