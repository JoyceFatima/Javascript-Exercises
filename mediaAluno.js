function Media(codigo, nota1, nota2, nota3) {
  resultado = (nota1*3 + nota2*3 + nota3*4)/10;
   if (resultado >= 5) {
    console.log(`Codigo do aluno ${codigo}. Aprovado  com ${resultado.toFixed(1)}`)
  } else {
    console.log(`Codigo do aluno ${codigo}. Reprovado com ${resultado.toFixed(1)}`)
  }
}

Media(300, 4, 3, 3)
