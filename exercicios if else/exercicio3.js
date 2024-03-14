
import entraDados from 'readline-sync';

let opcoes = ['soma', 'subtração', 'multiplicação', 'divisão'];

let calcular = () => {
  let valor1 = entraDados.question('Digite o primeiro valor: ');
  let valor2 = entraDados.question('Digite o segundo valor: ');
  let operacao = entraDados.question('Escolha a operação desejada: ');

  switch (operacao) {
    case 'soma':
      console.log(`O resultado da soma é ${valor1 + valor2}`);
      break;
    case 'subtração':
      console.log(`O resultado da subtração é ${valor1 - valor2}`);
      break;
    case 'multiplicação':
      console.log(`O resultado da multiplicação é ${valor1 * valor2}`);
      break;
    case 'divisão':
      console.log(`O resultado da divisão é ${valor1 / valor2}`);
      break;
    default:
      console.log('Operação inválida!');
      break;
  }
};

calcular();
