let texto = prompt("Ingrese un texto");

texto = texto.toLowerCase();

let vocales = ["a", "e", "i", "o", "u"]

let contadorVocales = 0;

for (let indiceTexto = 0; indiceTexto < texto.length; indiceTexto++) {
  for (let indiceVocales = 0; indiceVocales < vocales.length; indiceVocales++) {
    if (texto.charAt(indiceTexto) === vocales[indiceVocales]) {
      contadorVocales++;
    }
  }
}

document.write(`Contador de Vocales: ${contadorVocales}`);
