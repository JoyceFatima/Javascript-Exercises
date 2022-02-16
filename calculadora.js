function Calculadora(num1, num2, operacao) {
  switch(operacao) {
    case '+':
      console.log(num1 + num2)
      break;
    case '-':
      console.log(num1 - num2)
      break;
    case '*':
      console.log(num1 * num2)
      break;
    case '/':
      console.log(num1 / num2)
      break;
      default: 
      console.log(`Insira uma operação ou numero`);
  }
}

Calculadora(2, 2, '+');
Calculadora(2, 2, '-');
Calculadora(2, 2, '*');
Calculadora(2, 2, '/');
