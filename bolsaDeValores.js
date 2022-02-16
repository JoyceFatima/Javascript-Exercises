function juroSimples(capital, taxa, tempo) {
  console.log(capital * taxa * tempo)
}

function juroComposto(capital, taxa, tempo) {
  const taxaTotal = 1 + taxa / 100
  console.log((capital * (taxaTotal ** tempo)).toFixed(2))
}

juroSimples(1200, 0.02, 15)
juroComposto(100, 1, 12)
