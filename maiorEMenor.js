function numeroMaiorEMenor (array){
  let maiorN = 0;
  let menorN = 0;
  for (let i in array) {
    if(array[i] > maiorN) {
      maiorN = array[i]
    } else {
      menorN = array[i]
    }
  }
  console.log(`Maior numero: ${maiorN}`)
  console.log(`Maior numero: ${menorN}`)
}

numeroMaiorEMenor([32, 4, 53, 16, 5, 9]);


//colocar em ordem
const maiorEMenor = ['2, 6, 7, 17, 20, 3']
console.log('Array original:' ,maiorEMenor);

maiorEMenor.sort(function(a, b) {
  return a - b
});

console.log('Array oerdenada:' ,maiorEMenor);

//mostrar o numero menor e o maior

const arrayMenor = (array) => {
  return Math.min.apply(Math, array)
}
const arrayMaior = (array) => {
  return Math.max.apply(Math, array)
}

var numeros = [2, 5, 6, 8, 3];
console.log(arrayMenor(numeros));
console.log(arrayMaior(numeros));