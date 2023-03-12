// 1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.

const edad = parseInt(prompt("Ingrese su edad"));

if (edad >= 18) {
  document.write("Puede conducir");
} else if (edad != Number) {
  document.write("La edad ingresada no es un número válido");
} else {
  document.write("Aún no puede conducir");
}