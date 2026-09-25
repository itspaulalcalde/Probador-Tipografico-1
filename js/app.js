// PASO 1: seleccionar elementos 

var texto = document.getElementById("texto");
var muestra = document.getElementById("muestra")


// PASO 2: texto en vivo 
texto.addEventListener("input", function() {
   console.log

    if (texto.value === "") {
        muestra.textContent = "El veloz muerciélago hindú"
    } else {
        muestra.textContent = texto.value;
    }
})