for (let num = 1; num <= 500; num++) {
  document.write(`${num}`);

  if (num % 4 === 0) {
    document.write(" (Múltiplo de 4)");
  }

  if (num % 9 === 0) {
    document.write(" (Múltiplo de 9)");
  }
  
  document.write("<br>");

  if (num % 5 === 0) {
    document.write("<hr>");
  }
}
