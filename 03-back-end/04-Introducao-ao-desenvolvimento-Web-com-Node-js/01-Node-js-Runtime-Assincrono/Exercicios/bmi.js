const readline = require('readline-sync');

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

function handleBMI(weight, height) {

  const heightInMeters = height / 100;
  const heightSquared = heightInMeters ** 2;
  const bmi = weight / heightSquared;

  return bmi;
}

function main() {
  const weight = readline.questionFloat("What\'s your weight? "); // peso em kilos
  const height = readline.questionInt("What\'s your height? "); // altura em centímetros
  
  const bmi = handleBMI(weight, height);
  console.log(`Weight: ${weight}, Height: ${height}`);
  console.log(`BMI: ${bmi.toFixed(2)}`);
  if(bmi < 18.5) {
    console.log("Você está abaixo do peso (magreza)");
    return;
  } if(bmi >= 18.5 && bmi <= 24.9) {
    console.log("Você está com o peso normal");
    return;
  } if(bmi >= 25 && bmi <= 29.9) {
    console.log("Você está acima do peso (sobrepeso)");
    return;
  } if(bmi >= 30 && bmi <= 34.9) {
    console.log("Você está com obesidade grau I");
    return;
  } if(bmi >= 35 && bmi <= 39.9) {
    console.log("Você está com obesidade grau II");
    return;
  } 
    console.log("Você está com obesidade grau III e IV");
}

main();

// ******************************************************************