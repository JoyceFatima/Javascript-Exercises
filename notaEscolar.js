//const Arredondamento = nota.map(function(item) {
//    return Math.round(item)
//});

function classifica(nota) {
  let notaCorrigida = arredondar(nota)
  if (nota >= 40) {
    console.log(`Parabens, você foi aprovado! ${notaCorrigida}`);
  } else {
    console.log(`Reprovado com a nota ${notaCorrigida}`);
  }
}

function arredondar (nota) {
  if (nota % 5 > 2) {
      return nota + (5 - (nota % 5))
  } else {
      return nota
  }
}

classifica(36.5)
classifica(70.5)
classifica(76)
classifica(50)
classifica(39.5)

