let par, impar, i;

function Vetor(vetor) {
  par = 0;
  impar = 0;
  for (i in vetor) {
    vetor[i] % 2 == 0 ? par++ : impar++;
  }
  console.log(`Pares ${par} e Impares ${impar}`)
}

Vetor([2, 38, 3, 14, 22, 5])
