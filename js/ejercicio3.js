let cadenasDeTexto = "";

do {
  let texto = prompt("Introduce una cadena de texto");

  if (texto != null) {
    texto = texto.trim();
  } else {
    texto = "";
  }

  if (cadenasDeTexto == "" && texto != "") {
    cadenasDeTexto += texto;
  } else if (cadenasDeTexto != "" && texto != "") {
    cadenasDeTexto = `${cadenasDeTexto} - ${texto}`
  } else {
    cadenasDeTexto = cadenasDeTexto;
  }

} while (confirm("¿Quieres seguir ingresando cadenas de texto?"));

document.write(cadenasDeTexto);
