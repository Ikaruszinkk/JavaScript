
import entraDados from 'readline-sync';

let categorias = ['A', 'B', 'C', 'D'];

let calcularAumento = (categoria, salario) => {
  let percentual = categorias.indexOf(categoria) + 1;
  let aumento = salario * percentual / 100;
  let novoSalario = salario + aumento;

  return novoSalario;
};

const main = () => {
  let categoria = entraDados.question('Qual é a categoria do funcionário? ');
  let salario = entraDados.question('Qual é o salário do funcionário? ');

  let novoSalario = calcularAumento(categoria, salario);

  console.log(`O novo salário do funcionário é R$${novoSalario}`);
};

main();