const edad = parseInt(prompt("Ingrese su edad"));

if (edad >= 18) {
  document.write("Puede conducir");
} else if (edad != Number) {
  document.write("La edad ingresada no es un número válido");
} else {
  document.write("Aún no puede conducir");
}