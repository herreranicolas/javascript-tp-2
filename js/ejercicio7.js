let numLimite = parseInt(prompt("Ingrese un número entre 1 y 50"));

if (numLimite < 1 || numLimite > 50) {
  alert(
    "El número ingresado esta fuera del rango. Recuerda debe ser un número entre 1 y 50."
  );
} else if (isNaN(numLimite)) {
  alert("Debes ingresar un número valido");
} else {
  for (let num = 0; numLimite > 0; numLimite--) {
    for (let numVueltas = 0; numVueltas < numLimite; numVueltas++) {
      document.write(numLimite);
    }
    document.write("<br>");
  }
}
