// A função abaixo pode receber tanto um número
// quanto uma string.
function imprimirCPF(cpf: number | string){
  console.log("Seu CPF é: " + cpf);
}

imprimirCPF(11111111111);
// Saída:
// Seu CPF é: 11111111111
imprimirCPF('111.111.111-11');
// Saída:
// Seu CPF é: 111.111.111-11

// Exercício

type StateOfTheWater = {
  state: 'liquid' | 'solid' | 'gas';
  temperature: number;
}

type CPF = {
  cpf: number | string;
}

type SO = 'linux' | 'mac' | 'windows'; 

type Volwels = 'a' | 'e' | 'i' | 'o' | 'u' ;
