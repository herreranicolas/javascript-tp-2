let numeroLimite = parseInt(prompt("Ingrese un número entre 1 y 50"));

if (numeroLimite < 1 || numeroLimite > 50) {
  alert("El número ingresado esta fuera del rango solicitado.");
} else if (isNaN(numeroLimite)) {
  alert("Debes introducir un número válido.");
} else {
  for (let num = 1; num <= numeroLimite; num++) {
    for (let numVuelta = 1; numVuelta < num + 1; numVuelta++) {
      document.write(numVuelta);
    }
    document.write("<br>");
  }
}
