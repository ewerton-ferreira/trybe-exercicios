// const friends = [10, 10, 10, 10, 10];

// const waiter = frindes.reduce((accummulator, person) => )


//Escreva uma função que retorne a soma dos números de um array
//Ex.: sum([2, 3, 4, 6, 8, 12 ,24]) deve retornar 59

// usando o for

// const sum = (numbers) => {
//   let soma = 0
//   for (let i = 0;i <= numbers; i += 1) {
//     soma += numbers[i]
//   }
// };
// console.log (sum([2, 3, 4, 6, 8, 12 ,24]));



// usando o forEach


// const sum = (numbers) => {
//   let soma = 0
//   numbers.forEach((number) => {
//    soma += number 
//   });
//   return soma;
// };

// console.log(sum([2, 3, 4, 6, 8, 12 ,24]));



// usando o reduce


    // 1- acumulador
    // 2- elemento da vez (number)
    // deve retornar o acumulador atualizado (considerando o elemento da vez)


//modo1
// const sum = (numbers) => {
//   return numbers.reduce((soma, number) => {
//     return soma + number;
//   }, 0);
// }
// console.log(sum([2, 3, 4, 6, 8, 12 ,24]))



//modo2
// const sum = (numbers) => numbers.reduce((soma, number) => soma + number, 0);
// console.log(sum([2, 3, 4, 6, 8, 12 ,24]));




// const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away']

//usando o forEach

//Retorno esperado: A long time ago in a galaxy far far away.

// const sentence = (words) => {
//   let phrase = '';
//   words.forEach((word) => {
//     phrase = `${phrase} ${word}`;
//   }); 
//   return phrase;
// }
// console.log(sentence(epic));


//usando reduce

// const sentence = (words) => {
//   return words.reduce((phrase, word) => {
//     return `${phrase} ${word}`;
//   }, ''); 
// }
// console.log(sentence(epic));




// const players = [
//   {fullName: 'Adrianno Imperador', email: 'didico@futebol.com.br'},
//   {fullName: 'Ronaldinho Gaucho', email: 'bruxo@futebol.com.br'},
//   {fullName: 'Ronaldo Fenômeno', email: 'cascao@futebol.com.br'},
//   {fullName: 'Túlio Maravilha', email: 'deputado@futebol.com.br'},
// ];

// const playerEmail = (players) => {
//   return players.reduce((obj, player) => {
//     obj[player.fullName] = player.email
//     return obj;
//   }, {});
// }
// console.log(playerEmail(players));