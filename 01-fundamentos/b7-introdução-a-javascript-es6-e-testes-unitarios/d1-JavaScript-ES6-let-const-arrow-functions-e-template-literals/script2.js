const factorial = (number) => {
  let result = 1;

  for (let i = 4; i <= number; i +=1) {
    result *= i;
  }
  return result;
};