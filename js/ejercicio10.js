const filas = parseInt(prompt("Ingrese la cantidad de filas: "));
const columnas = parseInt(prompt("Ingrese la cantidad de columnas"));

let filasPorColumnas = filas * columnas;

document.write(`
  <table border="1" cellpadding="10">
    <tbody>
`);

for (let indiceFilas = 0; indiceFilas < filas; indiceFilas++) {
  document.write(`
      <tr>
`);
  for (let indiceColumnas = 0; indiceColumnas < columnas; indiceColumnas++) {
    document.write(`
  <td>${filasPorColumnas--}</td>
  `);
  }

  document.write(`
      </tr>
`);
}

document.write(`
    </tbody>
  </table>
`);
