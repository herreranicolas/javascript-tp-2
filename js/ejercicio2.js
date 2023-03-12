let nota = parseInt(prompt("Ingrese una nota de 0 a 10"));

console.log(nota);

switch (isNaN(nota) || nota) {
  case 0:
  case 1:
  case 2:
    alert("Muy deficiente");
    break;
  case 3:
  case 4:
    alert("Insuficiente");
    break;
  case 5:
  case 6:
    alert("Suficiente");
    break;
  case 7:
    alert("Bien");
    break;
  case 8:
  case 9:
    alert("Notable");
    break;
  case 10:
    alert("Sobresaliente");
    break;
  case true:
    alert("Introduce un número válido");
    break;

  default:
    alert("Número erroneo");
}
