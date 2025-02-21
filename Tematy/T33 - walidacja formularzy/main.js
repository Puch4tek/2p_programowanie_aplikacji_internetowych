const form = document.querySelector('#form');
const btn = document.querySelector('#btn');

btn.addEventListener("click", function () {
    console.log("click");
    const username = form.elements.username.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    const confirmPassword = form.elements.confirmPassword.value;
    const wynik = document.querySelector('#wynik');

    wynik.innerHTML = "";
    let errors = [];

    if (username === "") {
        errors.push("Nazwa użytkownika nie może być pusta.");
    }

    let emailRegex = /^[a-zA-Z0-9._%+-]+@zspglogow\.pl$/;
    if (!emailRegex.test(email)) {
        errors.push("Adres e-mail musi być w domenie zspglogow.pl.");
    }

    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;
    if (!passwordRegex.test(password)) {
        errors.push("Hasło musi mieć co najmniej 8 znaków, zawierać małe i duże litery, cyfrę oraz znak specjalny.");
    }

    if (password !== confirmPassword) {
        errors.push("Hasła muszą być identyczne.");
    }

    if (errors.length > 0) {
        wynik.innerHTML = errors.join("<br>");
        wynik.style.color = "red";
    } else {
        wynik.innerHTML = `Dane poprawne:<br>Użytkownik: ${username}<br>Email: ${email}<br>Hasło: ${password}`;
        wynik.style.color = "green";
    }
});