// const readline = require('readline-sync');

// const name = readline.question('Qual o seu nome? ');
// const age = readline.questionInt('Quantos anos você tem? ');

// console.log(`Hello, ${name}! You are ${age} year old!`);

// ************************************************************************************************

const fs = require('fs').promises;

async function main() {
  try {
    const data = await fs.readFile('./meu-arquivo.txt', 'utf-8');
    console.log(data);
  } catch (err) {
    console.error(`Erro ao ler o arquivo: ${err.message}`);
  }
}

main()

// ************************************************************************************************