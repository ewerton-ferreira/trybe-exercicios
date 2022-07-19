// setTimeout(() => {
//   console.log('Comprar parafusos') // Comprar parafusos
//   console.log('Adicionar ao estoque') // Adicionar ao estoque
// }, 2000);

// console.log('1 - Receber roda'); // 1 - Receber roda
// console.log('2 - Encaixar parafusos'); // 2 - Encaixar parafusos
// console.log('3 - Fixar roda no carro'); // 3 - Fixar roda no carro

// // As linhas 2 e 3 são impressas após os 2000 ms.

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// const pushLetter = (list, letter) => list.push(letter);

// let letter = []

// pushLetter(letter, 'M');
// pushLetter(letter, 'a');
// pushLetter(letter, 't');
// pushLetter(letter, 'e');
// pushLetter(letter, 'u');
// pushLetter(letter, 's');

// console.log(letter);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// const pushNumber = (list, number) => list.push(number);

// let numbers = [];

// pushNumber(numbers, 1);
// pushNumber(numbers, 2);
// pushNumber(numbers, 3);

// console.log(numbers);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// const pushNumber = (list, number) => list.push(number);

// let numbers = [];

// setTimeout(() => pushNumber(numbers, 1), 3000);
// pushNumber(numbers, 2);
// pushNumber(numbers, 3);

// console.log(numbers); // O retorno é [2, 3]

// const pushNumber = (list, number) => list.push(number);

// let numbers = [];

// setTimeout(() => pushNumber(numbers, 1), 2000);
// pushNumber(numbers, 2);
// pushNumber(numbers, 3);

// setTimeout(() => console.log(numbers), 2000);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// // Declaramos nossa variável de despesas
// const despesas = [
//   {
//     gym: 99,
//   },
//   {
//     ifood: 200,
//   },
//   {
//     phone: 60,
//   },
//   {
//     internet: 100,
//   },
// ];

// // Declaramos nossa renda
// const renda = 1000;

// const despesaMensal = (renda, despesas, callback) => {
//   // Definimos que a despesa total é igual ao valor retornado pela função callback (que é o parâmetro da nossa função)
//   // que vai receber nosso parâmetro/variável "despesas"
//   const despesaTotal = callback(despesas);
//   // Definimos nosso saldo final, que é nossa renda - nossa despesa total
//   const saldoFinal = renda - despesaTotal;

//   console.log(`Balanço do mês:
//     Recebido: R$${renda},00
//     Gasto: R$${despesaTotal},00
//     Saldo: R$${saldoFinal},00 `);
// };

// // Definimos nossa função que será passada como parâmetro
// // essa função recebe o parâmetro despesas a partir da função principal despesaMensal
// const somaDespesas = (despesas) => {
//   // Separamos cada item do nosso array de despesas
//   // e fazemos um reduce para somar os valores
//   const custoItem = despesas.map((item) => Object.values(item));
//   const despesaTotal = custoItem.reduce((acc, curr) => acc += curr[0], 0);
//   return despesaTotal;
// };

// // Executamos a função principal com as variáveis renda, despesas
// // e a nossa função somaDespesas
// // callback = somaDespesas
// despesaMensal(renda, despesas, somaDespesas);

// // Balanço do mês:
// //     Recebido: R$1000,00
// //     Gasto: R$459,00
// //     Saldo: R$541,00

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

const resultadoFinal = (resultado) => {
  console.log(resultado);
}
// // primeiro modo
// const funcSoma = (n1, n2) => n1 + n2;

// let resultadoSoma = funcSoma(9, 7);

resultadoFinal(resultadoSoma);

// // segundo modo
// const funcSoma = (num1, num2) => { 
//   let soma = num1 + num2;
//   resultadoFinal(soma);
// }
// funcSoma(9, 6)

// terceiro modo função callback
const funcSoma = (num1, num2, callback) => { 
  let soma = num1 + num2;
  callback(soma);
}
funcSoma(5, 4, resultadoFinal)

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


 
