function Bissextos(ano) {
  if ((ano % 4 == 0) && (ano % 100 != 0) || (ano % 400 == 0)){
    console.log(true)
  } else {
    console.log(false)
  } 
}

Bissextos(40)
