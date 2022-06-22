//Q02

const resultRaffle = (myNumber, number) => myNumber === number;

const raffle = (myNumber, callback) => {
  const number = Math.floor(Math.random() * 5);

  return callback(myNumber, number) ? 'Parabéns você ganhou' : 'Tente novamente';
};

console.log(raffle(3, resultRaffle));