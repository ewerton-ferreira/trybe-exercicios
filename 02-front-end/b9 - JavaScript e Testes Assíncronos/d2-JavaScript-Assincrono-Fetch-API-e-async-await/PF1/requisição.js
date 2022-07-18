// const fetch = require('node-fetch');

// const getRandomAdvice = () => {
//   const url = 'https://api.adviceslip.com/advice';
//   const request = fetch(url)
//     .then((response) => (response.json()))
//     .then((object) => console.log(object.slip.advice))
//     .catch((error) => console.log((`Algo deu errado 1 :( \n${error})`)));
// };


// const getRandomAdvice2 = () => {
//   const url = 'https://api.adviceslip.com/advice';
//   const request = fetch(url)
//     .then((response) => (response.json()))
//     .then((object) => {
//       const { slip } = object
//       const { id, advice } = slip
//       console.log(id, advice)
//     })
//       .catch((error) => console.log((`Algo deu errado 2 :( \n${error})`)));;
// };

// const getRandomAdvice3 = () => {
//   const url = 'htps://api.adviceslip.com/advice';
//   const request = fetch(url)
//     .then((response) => (response.json()))
//     .then(({ slip: { id, advice } }) => console.log(id, advice))
//     .catch((error) => console.log('Algo deu errado 3', error.errno));
// };

// // fiz nos três modos

// getRandomAdvice();
// getRandomAdvice2();
// getRandomAdvice3();

//x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x
//x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x*x

const fetch = require('node-fetch');

// const getRandomAdvice = async () => {
//   const url = 'https://api.adviceslip.com/advice';
//   const request = await fetch(url)
//     .then((response) => (response.json()))
//     .then((object) => console.log(object.slip.advice))
//     .catch((error) => console.log((`Algo deu errado 1 :( \n${error})`)));
// };

// getRandomAdvice();



const getRandomAdvice2 = async () => {
  try{
    const url = 'https://api.adviceslip.com/advice';
    const request = await fetch(url);
    const json = await request.json;
    const { slip } = json;
    const { id, advice } = slip;
    return advice;
    } catch(err) {
    return 'Algo deu errado outra vez.';
  }
};

getRandomAdvice2();