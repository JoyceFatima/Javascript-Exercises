function Comprimentos(a, b, c) {
  if (a == b  &&  a == c) {
    return console.log(`Três, lados iguais. É um triangulo Equilátero.`);
  } else if (a == b && b !== c) {
    return console.log(`Dois lados iguais. É um triangulo Isósceles.`);
  } else if (a != b && b != c && c != a) {
    return console.log(`Três lados diferentes. É um trinagulo Escaleno.`);
  }
}

Comprimentos(4, 3, 2);
