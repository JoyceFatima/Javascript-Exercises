function AplicaçãoSimples(capital, juroSimples, tempo) {
  console.log(capital * juroSimples * tempo)
}

AplicaçãoSimples(100, 1, 30)

function AplicaçãoComposta(capital, juroComposto, tempo) {
  console.log((capital * (1 + juroComposto) ** tempo).toFixed(2))
}

AplicaçãoComposta(100, 1, 30)
