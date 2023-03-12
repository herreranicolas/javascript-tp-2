let numLimite = parseInt(prompt("Ingrese un número no mayor a 50"));

for (let num = 0; numLimite > 0; numLimite--) {
  for (let numVueltas = 0; numVueltas < numLimite; numVueltas++) {
    document.write(numLimite);
  }
  document.write("<br>")
}