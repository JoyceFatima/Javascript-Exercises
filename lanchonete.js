function Lanchonete(codigo, quantidade) {
  let valor;
  switch(codigo) {
    case 100:
      valor = 3;
      break;
    case 200:
      valor = 4;
      break;
    case 300:
      valor = 5.5;
      break;
    case 400:
      valor = 7.5;
      break;
    case 500:
      valor = 3.5;
      break;
    case 600:
      valor = 2.8;
      break;
      default:
        console.log(`Produto invalido.`)
  }
  return (valor *= quantidade);
}

console.log(Lanchonete(100, 1));
console.log(Lanchonete(200, 2));
console.log(Lanchonete(300, 3));
console.log(Lanchonete(400, 4));
console.log(Lanchonete(500, 5));
console.log(Lanchonete(600, 6));
