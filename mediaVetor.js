let array = [5, 7, 9, 9];

function mediaVetor(vetor, n) {
  let media, soma= 0; 
  for(let i = 0; i < n; i++) {
    soma += vetor[i];
  }
  return soma/n;
}

mediaVetor(array, 4);