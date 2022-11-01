const readline = require('readline-sync');

const askName = () => readline.question('Qual o do pacote? ');
const aula = () => readline.question('Em qual aula você viu? ');

module.exports = { askName, aula };