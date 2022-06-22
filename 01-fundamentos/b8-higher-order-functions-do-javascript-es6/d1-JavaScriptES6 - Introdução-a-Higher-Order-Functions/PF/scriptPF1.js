// const sayHello = () => {
//   return ('hello dev');
// }

// const printGreeting = (callback) => {
//     console.log(callback('oi!'));
// }

// printGreeting(sayHello);

// --------------------------------------------------------------------------------

// const sumFixAmount = (amount) => {
//   return (number) => amount + number;
// }

// const initialSum = sumFixAmount(25)
// console.log(initialSum(10));

// --------------------------------------------------------------------------------

// const button = document.querySelector('#signup-button');

// const registerUser = () => {
//   console.log('Registrado com sucesso!');
// };

// button.addEventListener('click', registerUser);

// --------------------------------------------------------------------------------

// const repeat = (number, action) => {
//   for (let count = 1; count <= number; count += 1) {
//     action(count);
//   }
// };

// repeat(10, console.log);

// --------------------------------------------------------------------------------

// const repeat = (number, action) => {
//   for (let count = 0; count <= number; count += 1) {
//     action(count);
//   }
// };

// repeat(3, (number) => {
//   if (number % 2 === 0) {
//     console.log(number, 'is even');
//   }
// });

// repeat(3, (number) => {
//   if (number % 2 === 1) {
//     console.log(number, 'is odd');
//   }
// })

// --------------------------------------------------------------------------------

// const repeat = (number, action) => {
//   for (let count = 0; count <= number; count += 1) {
//     action(count);
//   }
// };

// const isEven = (number) => {
//   if (number % 2 === 0) {
//     console.log(number, 'is even');
//   }
// };

// const isOdd = (number) => {
//   if (number % 2 !== 0) {
//     console.log(number, 'is odd');
//   }
// }

// repeat(5, isEven);
// repeat(5, isOdd);

// const evenOrOdd = (number) => {
//   if (number % 2 === 0) {
//     console.log(number, 'is even');
//   } else {
//     console.log(number, 'is odd');
// }};

// repeat(10, evenOrOdd);

// --------------------------------------------------------------------------------

// const numberGenerator = () => {
//   return Math.random() * 100;
// }

// console.log(numberGenerator());

// ****** fiz com números inteiros *****

// const numberGenerator = () => {
//   return Math.floor(Math.random() * 100);
// }

// console.log(numberGenerator());

// --------------------------------------------------------------------------------

// const sum = (n1, n2) => n1 + n2;
// const sub = (n1, n2) => n1 - n2;
// const mult = (n1, n2) => n1 * n2;
// const div = (n1, n2) => n1 / n2;

// const calculator = (func) => func(20, 10)

// console.log(calculator(sum));
// console.log(calculator(sub));
// console.log(calculator(mult));
// console.log(calculator(div));

// --------------------------------------------------------------------------------

let wakeUp = () => {
  return ('Acordando!!');
};

let haveBreakfast = () => {
  return ('Bora tomar café!!');
};

let sleep = () => {
  return ('Partiu dormir');
};

let doingThings = (func) => console.log(func());

doingThings(wakeUp);
doingThings(haveBreakfast);
doingThings(sleep);

