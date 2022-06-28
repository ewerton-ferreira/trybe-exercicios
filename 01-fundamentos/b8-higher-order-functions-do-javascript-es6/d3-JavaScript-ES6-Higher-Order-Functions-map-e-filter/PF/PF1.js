// const arr = ['Ana', 'Pedro', 'Giovana'];

// arr.filter((element) => console.log(element));

// arr.filter((element, index, array) => console.log('Elemento:', element, 'Índice', index, 'Array', array));

// const filtered = arr.filter((element) => element === 'Ana');
// console.log(filtered);


//*******************************************************//

// const notaEstudantes = [
//   {
//     nome: 'Joicy',
//     nota: 100
//   },
//   {
//     nome: 'Ronald',
//     nota: 50
//   },
//   {
//     nome: 'Joel',
//     nota: 80
//   },
//   {
//     nome: 'Ana',
//     nota: 90
//   },
//   {
//     nome: 'Carol',
//     nota: 70
//   },
// ];

// const estudantesAprovados= notaEstudantes.filter(((element) => element.nota >= 80));
// console.log(estudantesAprovados);

// // const estudantesReprovados= notaEstudantes.filter(((element) => element.nota < 80));
// // console.log(estudantesReprovados);

// const estudantesReprovados= notaEstudantes.filter(((element) => !(element.nota >= 80)));
// console.log('Os estudantes reprovados são', estudantesReprovados);

//*******************************************************//



// const numbers = [19, 21, 30, 3, 45, 22, 15];

// const verifyEven = (number) => number % 2 === 0;

// const isEven = numbers.filter(verifyEven);
// const isEven3 = numbers.find(verifyEven);

// const verifyOdd = (number) => number % 3 === 0;

// const isOdd = numbers.filter(verifyOdd);
// const isOdd3 = numbers.find(verifyOdd);

// console.log(isEven); // [ 30, 22 ]
// console.log(isEven3); // 30
// console.log(isOdd); // [ 21, 30, 3, 45, 15 ]
// console.log(isOdd3); // 21

// // Outra forma de ser realizada sem a necessidade de criar uma nova função.
// const isEven2 = numbers.filter((number) => number % 2 === 0);
// const isEven4 = numbers.find((number) => number % 2 === 0);
// const isOdd2 = numbers.filter((number) => number % 3 === 0);
// const isOdd4 = numbers.find((number) => number % 3 === 0);

// console.log(isEven2); // [ 30, 22 ]
// console.log(isEven4); // 30
// console.log(isOdd2); // [ 21, 30, 3, 45, 15 ]
// console.log(isOdd4); // 21


//*******************************************************//



// const objPeople = [
//   { name: 'José', age: 21 },
//   { name: 'Lucas', age: 19 },
//   { name: 'Maria', age: 16 },
//   { name: 'Gilberto', age: 18 },
//   { name: 'Vitor', age: 15 },
// ];

// const verifyAgeDrive = (arrayOfPeople) => (
//   arrayOfPeople.filter((people) => (people.age < 18))
//   );

// const verifyAgeDrive2 = (arrayOfPeople2) => (
//     arrayOfPeople2.find((people) => (people.age > 20))
//   );


// console.log(verifyAgeDrive(objPeople));
// console.log(verifyAgeDrive2(objPeople));
// // [ { name: 'Maria', age: 16 }, { name: 'Vitor', age: 15 } ]



//*******************************************************//



const arrayMyStudents = ['Maria', 'Manuela', 'Jorge', 'Ricardo', 'Wilson'];

const removeStudentByName = (name, listStudents) =>
  listStudents.filter((student) => student !== name);
  // Filtra todos os estudantes que não têm o nome 'Ricardo' e retorna um array com eles. Na prática, remove o Ricardo do array.

const newListStudents = removeStudentByName('Ricardo', arrayMyStudents);
console.log(newListStudents); // [ 'Maria', 'Manuela', 'Jorge', 'Wilson' ]