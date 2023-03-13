let cadenaDeTexto = prompt("Ingrese una cadena de texto")

cadenaDeTexto = cadenaDeTexto.split("")

let textoTransformado = "";

for (let i = 0; i < cadenaDeTexto.length; i++) {
  textoTransformado += `${cadenaDeTexto[i]}-`
}

document.write(textoTransformado);



