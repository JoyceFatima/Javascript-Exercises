function Associacao (mes, valor) {
  anuidade = valor * Math.pow((1 + 0.05), mes - 1);
  return anuidade.toFixed(2);
}

console.log(Associacao(1, 100));
console.log(Associacao(4, 100));
console.log(Associacao(3, 100));
