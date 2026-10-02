// PASO 1: Seleccionar elementos 

var texto = document.getElementById("texto");
var muestra = document.getElementById("muestra");
var tamano = document.getElementById("tamano");
var fuente = document.getElementById("fuente");


var color = document.querySelector("#color");

// PASO 2: Texto en vivo 
texto.addEventListener("input", function() {
   console.log

    if (texto.value === "") {
        muestra.textContent = "El veloz muerciélago hindú"
    } else {
        muestra.textContent = texto.value;
    }
})


// PASO 3: Tamaño de fuente 
tamano.addEventListener("input", function () {
   muestra.style.fontSize = tamano.value + "px";
    //Accedemos al contenido de texto de valor y lo igualamos al valor del tamaño

    valor.textContent = tamano.value + "px";
})


// PASO 4: Tipografía (font-family)
fuente.addEventListener("change", function () {
    muestra.style.fontFamily = fuente.value;
})

// EXTRA 

// COLOR
// En HTML necesitamos un elemento <input type="color">
var color = document.querySelector("#color");

color.addEventListener("input", function(){
    muestra.style.color = color.value;
})

// NEGRITA
var btnBoldItalic = document.querySelector("boldItalic");

btnBoldItalic.addEventListener("click", function () {
    muestra.classList.toggle("negrita");
})


// SUPEREXTRA HACER RESET 

var btnReset = document.querySelector("#reset");

btnReset.addEventListener("click", function () {
    texto.value = "";
    muestra.textContent = "El veloz muerciélago hindú";

    tamano.value = "48";
    valor.textContent = "48px";
    muestra.style.fontSize = "48px"

    fuente.selectedindex = 0;
    muestra.style.fontFamily = fuente.value;

    color.value = " #ff0000";
})