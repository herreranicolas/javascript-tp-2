let resultado = 0;

do {
  let numero = parseInt(prompt("Ingrese un número"));
  if (isNaN(numero)) {
    alert("Introduce un número valido");
  }
  resultado += numero;
} while (confirm("¿Desea continuar ingresando números?"));

if (!isNaN(resultado)) {
  document.write(resultado);
} 
