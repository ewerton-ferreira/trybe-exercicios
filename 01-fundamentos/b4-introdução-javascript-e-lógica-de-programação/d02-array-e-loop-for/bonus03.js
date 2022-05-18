let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let multiplied = [];

for (let index = 0; index < numbers.length; index += 1) {
  if (index + 1 < numbers.length) {
    multiplied.push(numbers[index] * numbers[index + 1]);
  } else {
    multiplied.push(numbers[index] * 2);
  }
}

console.log(multiplied);





// [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]

