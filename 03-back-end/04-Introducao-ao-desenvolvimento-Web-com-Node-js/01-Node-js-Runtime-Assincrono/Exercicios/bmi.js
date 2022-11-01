const weightInKg = 95; // peso em kilos
const heightInCm = 174; // altura em centímetros

function handleBMI(weight, height) {
  console.log(`Weight: ${weight}, Height: ${height}`);

  const heightInMeters = height / 100;
  const heightSquared = heightInMeters ** 2;
  const bmi = weight / heightSquared;

  return bmi;
}

function main() {
  const bmi = handleBMI(weightInKg, heightInCm);
  console.log(`BMI: ${bmi.toFixed(2)}`);
}

main();
