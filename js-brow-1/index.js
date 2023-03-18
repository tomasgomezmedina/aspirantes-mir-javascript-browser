let input = document.querySelector("#texto");
let resultato = document.querySelector("#resultado");
//tambien existe el getElementById(), pero siguiendo los requerimientos se usa el querySelector

let btn = document.getElementsByClassName("btn")[0];

let resultatoMayusculas = document.getElementById("resultadoMayusculas");

//se puede implementar el siguiente bloque de codigo  para ver en tiempo real el resultado en mayusculas de lo que va escribiento el usuario

/* input.addEventListener("input", function () {
    const texto = getTexto();
    resultado.textContent = texto;
}); */

//funcion para que al momento de dar click en el boton muestre el resultado en mayusculas
btn.addEventListener("click", function () {
    const texto = getTexto();
    resultatoMayusculas.textContent = texto;
});

//se crea la funcion para obtener el valor que del input
function getTexto() {
    return input.value.toUpperCase();
}