function reajusteSalarial(a, b) {
  switch(a) {
    case '1000':
      console.log(`Seu salario de ${a} tera aumento de: ${b*1.2}`)
      break;
    case '1200':
      console.log(`Seu salario de ${a} tera aumento de: ${b*1.5}`)
      break;
    case '1500':
      console.log(`Seu salario de ${a} tera aumento de: ${b*1.7}`)
      break;
      default:
        console.log(`Não existe este reajuste.`)
  }
}

reajusteSalarial('1500', 1000);
