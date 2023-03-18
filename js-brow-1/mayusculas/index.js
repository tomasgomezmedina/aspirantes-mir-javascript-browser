let input = document.querySelector("#texto");
let resultato = document.querySelector("#resultado");
//tambien existe el getElementById(), pero siguiendo los requerimientos se usa el querySelector

let btn = document.getElementsByClassName("btn")[0];

let resultadoMayusculas = document.getElementById("resultadoMayusculas");

input.addEventListener("input", function () {
    const texto = input.value.toUpperCase();
    resultado.textContent = texto;
});

btn.addEventListener("click", function () {
    const texto = getTexto();
    resultadoMayusculas.textContent = texto;
});

function getTexto() {
    return input.value.toUpperCase();
}