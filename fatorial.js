function Fatorial(x) { 
  if (x === 0) return 1;
  if (x === 1) return 1;
  return x * Fatorial(x - 1);
}
 
console.log(Fatorial(6))

