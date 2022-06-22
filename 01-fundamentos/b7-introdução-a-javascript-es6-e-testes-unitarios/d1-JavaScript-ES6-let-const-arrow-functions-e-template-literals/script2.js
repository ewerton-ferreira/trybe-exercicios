//Q01

// const factorial = number => {
//   let result = 1;

//   for (let index = 2; index <= number; index += 1) {
//     result *= index;
//   }

//   return result;
// };

// console.log(factorial(5));

// const factorial2 = (number) => number > 1 ? number * factorial(number -1) : 1;
// console.log(factorial2(6));

//Q02

// const longestWord = text => {
//   const wordArray = text.split(' ');
//   let maxLength = 0;
//   let resultword = '';

//   for (const word of wordArray) {
//     if (word.length > maxLength) {
//       maxLength = word.length;
//       resultword = word;
//     }

//   }
//   return resultword
// }

// console.log(longestWord('Antônio foi ao banheiro e não sabemos o que aconteceu'));


// const longestWord2 = text => text.split(' ').sort((wordA, WordB) => WordB.length - wordA.length)[0];
// console.log(longestWord2('Antônio foi ao banheiro e não sabemos o que aconteceu, estamos muito preocupados'));

//Q03

// let clickCount = 0;
// const textToDisplay = document.getElementById('text');
// const buttonTest = document.getElementById('button_test');

// buttonTest.addEventListener('click', () => textToDisplay.innerHTML = clickCount += 1);

//Q04

const replaceX = name => {
  const phrase = 'Trybe x aqui!';
  const phraseArray = phrase.split(' ');
  for (let i = 0; i < phraseArray.length; i += 1) {
    if (phraseArray[i] === 'x') {
      phraseArray[i] = name;
    }
  }
  return phraseArray.join(' ');
}

console.log(replaceX('Bebeto'));


const mySkills = func => {
  const skills = ['JavaScript', 'HTML', 'CSS'];
  let result = `${func} Minhas três principais habilidades são:`;
    skills.forEach((skill) => {result = `${result} - ${skill}`;
});
  return result;
};

console.log(mySkills(replaceX('Bebeto')));
