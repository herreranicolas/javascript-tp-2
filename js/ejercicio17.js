let texto = prompt("Ingresa un texto");

texto = texto.toLowerCase();

let vocales = ["a", "e", "i", "o", "u"];

let posicionVocal = 0;

let guardarPosicionVocal = false;

for (let indiceTexto = 0; indiceTexto < texto.length; indiceTexto++) {
  if (vocales.includes(texto.charAt(indiceTexto))) {
    posicionVocal = indiceTexto;
    guardarPosicionVocal = true;
    break;
  }

  if (guardarPosicionVocal) {
    break;
  }
}

document.write(
  `La primera vocal del texto ingresado se encuentra en la posición ${posicionVocal}`
);
