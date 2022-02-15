const pesoDigitado = prompt('Digite seu peso: ');
const alturaDigitada = prompt('Digite sua altura: ');

console.log(pesoDigitado)
console.log(alturaDigitada)

const pesoEAltura = parseInt(alturaDigitada, pesoDigitado);

const imc = pesoDigitado / (alturaDigitada * alturaDigitada)

console.log(imc)