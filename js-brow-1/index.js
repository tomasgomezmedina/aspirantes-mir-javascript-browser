let input = document.querySelector("#texto");
let resultato = document.querySelector("#resultado");
//tambien existe el getElementById(), pero siguiendo los requerimientos se usa el querySelector

let btn = document.getElementsByClassName("btn")[0];

let resultatoMayusculas = document.getElementById("resultadoMayusculas");

btn.addEventListener("click", function () {
    const texto = getTexto();
    resultatoMayusculas.textContent = texto;
});

function getTexto() {
    return input.value.toUpperCase();
}