// PASO 1: Seleccionar elementos 

var texto = document.getElementById("texto");
var muestra = document.getElementById("muestra");
var tamano = document.getElementById("tamano");
var fuente = document.getElementById("fuente");

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

// 