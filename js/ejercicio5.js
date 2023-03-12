let resultado = "";

do {
  let dni = parseInt(prompt("Ingrese un número de Documento Nacional de Identidad"));

  switch ((dni > 0 && dni < 99999999) && dni % 23 || isNaN(dni)) {
    case 0:
      resultado += "T";
      break;
    case 1:
      resultado += "R";
      break;
    case 2:
      resultado += "W";
      break;
    case 3:
      resultado += "A";
      break;
    case 4:
      resultado += "G";
      break;
    case 5:
      resultado += "M";
      break;
    case 6:
      resultado += "Y";
      break;
    case 7:
      resultado += "F";
      break;
    case 8:
      resultado += "P";
      break;
    case 9:
      resultado += "D";
      break;
    case 10:
      resultado += "X";
      break;
    case 11:
      resultado += "B";
      break;
    case 12:
      resultado += "N";
      break;
    case 13:
      resultado += "J";
      break;
    case 14:
      resultado += "Z";
      break;
    case 15:
      resultado += "S";
      break;
    case 16:
      resultado += "Q";
      break;
    case 17:
      resultado += "V";
      break;
    case 18:
      resultado += "H";
      break;
    case 19:
      resultado += "L";
      break;
    case 20:
      resultado += "C";
      break;
    case 21:
      resultado += "K";
      break;
    case 22:
      resultado += "E";
      break;
    case true:
      alert("Debes introducir un número válido");
      break;

    default:
      alert(
        "El número ingresado no esta dentro del rango. El numero debe ser entre 0 y 99999999"
      );
      break;
  }
} while (confirm("¿Desea ingresar otro número de documento?"));

document.write(resultado)