const readline = require('readline-sync');
const fs = require('fs').promises;
const path = require('path');




// const weightInKg = 95; // peso em kilos
// const heightInCm = 174; // altura em centímetros

// function handleBMI(weight, height) {
//   console.log(`Weight: ${weight}, Height: ${height}`);

//   const heightInMeters = height / 100;
//   const heightSquared = heightInMeters ** 2;
//   const bmi = weight / heightSquared;

//   return bmi;
// }

// function main() {
//   const bmi = handleBMI(weightInKg, heightInCm);
//   console.log(`BMI: ${bmi.toFixed(2)}`);
// }

// main();

// ******************************************************************

//REQUISITO 03

// function handleBMI(weight, height) {

//   const heightInMeters = height / 100;
//   const heightSquared = heightInMeters ** 2;
//   const bmi = weight / heightSquared;

//   return bmi;
// }

// function main() {
//   const weight = readline.question("What\'s your weight? "); // peso em kilos
//   const height = readline.question("What\'s your height? "); // altura em centímetros
  
//   const bmi = handleBMI(weight, height);
//   console.log(`BMI: ${bmi.toFixed(2)}`);
// }

// main();

// ******************************************************************

//REQUISITO 04

// function handleBMI(weight, height) {

//   const heightInMeters = height / 100;
//   const heightSquared = heightInMeters ** 2;
//   const bmi = weight / heightSquared;

//   return bmi;
// }

// function main() {
//   const weight = readline.questionFloat("What\'s your weight? "); // peso em kilos
//   const height = readline.questionInt("What\'s your height? "); // altura em centímetros
  
//   const bmi = handleBMI(weight, height);
//   console.log(`Weight: ${weight}, Height: ${height}`);
//   console.log(`BMI: ${bmi.toFixed(2)}`);
// }

// main();

// ******************************************************************

//REQUISITO 05

// function handleBMI(weight, height) {

//   console.log(`Weight: ${weight}, Height: ${height}`);

//   const heightInMeters = height / 100;
//   const heightSquared = heightInMeters ** 2;
//   const bmi = (weight / heightSquared);

//   return bmi;
// }

// //outro jeito de fazer o requisito 5
// const BMI_MAX_AND_MIN = {
//   'Abaixo do peso (magreza)': {
//     BMIMax: 18.5
//   },
//   'Peso normal': {
//     BMIMin: 18.5,
//     BMIMax: 24.9
//   },
//   'Acima do peso (Sobrepeso)': {
//     BMIMin: 25,
//     BMIMax: 29.9
//   },
//   'Obesidade grau I': {
//     BMIMin: 30,
//     BMIMax: 34.9
//   },
//   'Obesidade grau II': {
//     BMIMin: 35,
//     BMIMax: 39.9
//   },
//   'Obesidade grau III (obesidade mórbida)': {
//     BMIMin: 40
//   },
// };

// function situationCalculed(bmi) {
//   const bmiSituation = Object.keys(BMI_MAX_AND_MIN).find((key) => {
//     const { BMIMin, BMIMax } = BMI_MAX_AND_MIN[key];
//     const isBiggerThanMin = BMIMin ? bmi >= BMIMin : true;
//     const isSmallerThanMax = BMIMax ? bmi <= BMIMax : true;

//     return isBiggerThanMin && isSmallerThanMax;
//   });
//   return bmiSituation;
// }

//   function main() {
//     const weight = readline.questionFloat("What\'s your weight? "); // peso em kilos
//     const height = readline.questionInt("What\'s your height? "); // altura em centímetros

//     const bmi = handleBMI(weight, height);
//     const situation = situationCalculed(bmi);

//     console.log(`BMI: ${bmi.toFixed(2)}`);
//     console.log(`Situation: ${situation}`);
//   }

  // fim do requisito 5 (outro modo)

// function main() {
//   const weight = readline.questionFloat("What\'s your weight? "); // peso em kilos
//   const height = readline.questionInt("What\'s your height? "); // altura em centímetros
  
//   const bmi = handleBMI(weight, height);
//   console.log(`Weight: ${weight}, Height: ${height}`);
//   console.log(`BMI: ${bmi.toFixed(2)}`);
//   if(bmi < 18.5) {
//     console.log("Você está abaixo do peso (magreza)");
//     return;
//   } if(bmi >= 18.5 && bmi <= 24.9) {
//     console.log("Você está com o peso normal");
//     return;
//   } if(bmi >= 25 && bmi <= 29.9) {
//     console.log("Você está acima do peso (sobrepeso)");
//     return;
//   } if(bmi >= 30 && bmi <= 34.9) {
//     console.log("Você está com obesidade grau I");
//     return;
//   } if(bmi >= 35 && bmi <= 39.9) {
//     console.log("Você está com obesidade grau II");
//     return;
//   } 
//     console.log("Você está com obesidade grau III e IV");
// }

// main();

// ******************************************************************

//REQUISITO 06-A


async function readAll() {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);
  const strings = simpsons.map(({ id, name }) => `${id} - ${name}`);

  strings.forEach((string) => console.log(string));
}


async function main() {
  await readAll();
}

main();
