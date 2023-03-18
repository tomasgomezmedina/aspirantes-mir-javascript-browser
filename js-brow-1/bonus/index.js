const input = document.getElementById("texto");
const resultado = document.getElementById("resultado");
const btn = document.getElementById("btn");

btn.addEventListener("click", esPalindromo);

function esPalindromo() {
    const texto = input.value.toLowerCase();
    const palabraInvertida = texto.split("").reverse().join("");

    if (texto === palabraInvertida) {
        resultado.textContent = "Es palindromo";
    }else {
        resultado.textContent = "No es palindromo";
    }

}