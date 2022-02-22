
function PlanoDeSaude(idade) {
  const acrecimo = 100;

  if (idade < 10) {
    return acrecimo + 80;
  }
  if(idade >= 10 && idade <=30) {
    return acrecimo + 50;
  }
  if(idade >= 30 && idade <=60) {
    return acrecimo + 95;
  } else {
      return acrecimo + 130;
  }
}

console.log(PlanoDeSaude(8));
