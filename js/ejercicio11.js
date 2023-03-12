let nombreUno = prompt("Ingrese el nombre de la primer persona")
let edadUno = parseInt(prompt("Ingrese la edad de la primer persona"));
let nombreDos = prompt("Ingrese el nombre de la segunda persona")
let edadDos = parseInt(prompt("Ingrese la edad de la segunda persona"));
let nombreTres = prompt("Ingrese el nombre de la tercer persona");
let edadTres = parseInt(prompt("Ingrese la edad de la tercer persona"));

let edadMayor = Math.max(edadUno, edadDos, edadTres);

if (edadMayor === edadUno) {
  document.write(nombreUno)
} 

if (edadMayor === edadDos) {
  document.write(nombreDos);
}

if (edadMayor === edadTres) {
  document.write(nombreTres);
}



