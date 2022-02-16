function Frutas(frutas) {
  switch(frutas) {
    case 1:
      console.log('Não vendemos esta fruta aqui')
      break;
    case 2:
      console.log('Estamos com escassez de kiwis')
      break;
    case 3:
      console.log('Aqui está, são 3 reais o quilo')
      break;
      default: 
      console.log(`Desculpe, houve um erro tente novamente!`)
  }
}

console.log(Frutas())