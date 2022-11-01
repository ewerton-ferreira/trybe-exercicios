const { getPackage } = require("./npm");
const { askName, aula } = require("./askName");

const main = async () => {
  const name = askName();
  
  const package = await getPackage(name);

  if(package) {
    console.log(`O nome ${name} é um pacote NPM`);
  } else {
    console.log(`O nome ${name} não é um pacote NPM`);
  }
}

main();
