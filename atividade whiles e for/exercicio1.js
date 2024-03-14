import { question, questionInt } from "readline-sync";

let numero = questionInt("Digite um numero: ");
let i = 1;
while (i <= 10) {
  console.log(numero + " x " + i + " = " + numero * i);
  i++;
}