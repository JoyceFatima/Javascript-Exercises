let array = [2, -5, -17, 10, 13];
let numeroNegativo, i;

const processo = (vetor) => {
  numeroNegativo = 0;
  numeroNormal = 0;
  for(i in vetor) {
    vetor[i] < -1 ? numeroNegativo++ : numeroNormal++;
  }
  console.log(`Quantidade de numeros negativos ${numeroNegativo} e normais ${numeroNormal}`);
}

processo(array);
