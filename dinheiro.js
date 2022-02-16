function Dinheiro(valor1, valor2) {
  console.log((valor1 + valor2).toFixed(2))
}

Dinheiro(0.1, 0.2)

/* Arrow */
const Funcao = (valor1, valor2) => {
	return (valor1 + valor2).toFixed(2)
}
console.log(Funcao(0.1, 0.2))
