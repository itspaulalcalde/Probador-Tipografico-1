# Probador-Tipografico-1

/* =========================================================
   EJERCICIO: PROBADOR TIPOGRÁFICO
   JavaScript nativo (ES5): usad var y function.
   =========================================================

   PASO 0
   Este archivo todavía no está enlazado. Enlázalo tú en index.html
   con una etiqueta <script> justo antes de cerrar </body>, usando
   la ruta correcta hasta este archivo. Para comprobar que funciona,
   escribe aquí console.log("Hola") y mira la consola del navegador.

   PASO 1
   Selecciona con document.getElementById los elementos con id:
   texto, tamano, valor, fuente y muestra. Guárdalos en variables.

   PASO 2
   Cuando se escriba en #texto (evento "input"), el párrafo #muestra
   debe mostrar lo escrito. Si el campo se queda vacío, vuelve a
   mostrar la frase inicial: "El veloz murciélago hindú".

   PASO 3
   Cuando se mueva el deslizador #tamano (evento "input"), cambia el
   tamaño de letra de #muestra (style.fontSize) y actualiza el texto
   de #valor. Recuerda que el valor necesita la unidad: "px".

   PASO 4
   Cuando cambie el desplegable #fuente (evento "change"), cambia la
   tipografía de #muestra (style.fontFamily) por la elegida.

   ---------------------------------------------------------
   RETOS EXTRA (para quien termine antes)
   ---------------------------------------------------------

   1. Color: añade un <input type="color"> en los controles que
      cambie el color del texto de la muestra (style.color).

   2. Negrita: añade un botón que active y desactive la negrita con
      classList.toggle("negrita"). La clase ya existe en el CSS.

   3. Reset: añade un botón que devuelva texto, tamaño, fuente
      (y color, si lo has hecho) a sus valores iniciales.

   4. Tus propias tipografías:
      a) Google Fonts (fonts.google.com): elige una fuente, copia su
         <link> y pégalo en el <head> de index.html.
      b) Adobe Fonts (fonts.adobe.com): añade la fuente a un proyecto
         web y copia el <link> que te da (use.typekit.net/...).
      c) Añade una <option> nueva al <select> con el nombre exacto de
         la fuente en el value. Por ejemplo:
         <option value="'Playfair Display', serif">Playfair Display</option>

      Si el PASO 4 está bien hecho, no hace falta tocar el JavaScript:
      las nuevas fuentes funcionarán solas.

   Pista para los botones: en el HTML, puedes meterlos dentro de un
   <div class="control"> con un <div class="botones"> dentro.
   ========================================================= */


// Empieza aquí tu código

