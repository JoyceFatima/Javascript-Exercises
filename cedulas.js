let notas100 = 0;
let notas50 = 0;
let notas10 = 0;
let notas5 = 0;
let notas1 = 0;

function Valor(entrada) {

  if (entrada > 0) {
    notas100 = entrada / 100;
    entrada = entrada % 100;

    notas50 = entrada / 50;
    entrada = entrada % 50;

    notas10 = entrada / 10;
    entrada = entrada % 10;

    notas5 = entrada / 5;
    entrada = entrada % 5;

    notas1 = entrada / 1;
    entrada = entrada % 1;
  } else {
    console.log("Valor inválido");
  }

  if (notas100 > 0) {
    console.log("Notas de 100: " + notas100);
  }
  if (notas50 > 0) {
    console.log("Notas de 50: " + notas50);
  }
  if (notas10 > 0) {
    console.log("Notas de 10: " + notas10);
  }
  if (notas5 > 0) {
    console.log("Notas de 5: " + notas5);
  }
  if (notas1 > 0) {
    console.log("Notas de 1: " + notas1);
  }
}


Valor(164)
