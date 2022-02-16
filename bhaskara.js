function Bhaskara(a, b, c) {
  const delta = b * b - 4 * a * c;
  const x1 = (-b + Math.sqrt(delta)) / (2 * a);
  const x2 = (-b - Math.sqrt(delta)) / (2 * a);
  return (`Bhaskara x1: ${x1.toFixed(2)} e Bhaskara x2: ${x2.toFixed(2)}`)
  //return -b +- Math.sqrt(b ** 2 - 4* a * c) /2* a
}

console.log(Bhaskara(1, 25, 2))
