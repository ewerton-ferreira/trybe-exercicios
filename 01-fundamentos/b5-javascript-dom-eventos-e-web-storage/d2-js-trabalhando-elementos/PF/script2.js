// Exercícios para fixar P1

// //Q01
// console.log(document.getElementById('elementoOndeVoceEsta').nextElementSibling.previousSibling.previousSibling)

// //Q02
// let test = document.getElementById('elementoOndeVoceEsta').parentElement;
// test.style.color = 'green';

// //Q03
// console.log(document.getElementById('elementoOndeVoceEsta').firstElementChild)

// //Q04
// console.log(document.getElementById('pai').firstElementChild)

// //Q05
// console.log(document.getElementById('elementoOndeVoceEsta').previousSibling.previousSibling)

// //Q06
// console.log(document.getElementById('elementoOndeVoceEsta').nextSibling)

// //Q07
// console.log(document.getElementById('elementoOndeVoceEsta').nextSibling.nextSibling)

// //Q08
// console.log(document.getElementById('pai').nextSibling.nextSibling);

// Exercícios para fixar P2

// E a prática? Aqui!
// Q01 - Crie um irmão para elementoOndeVoceEsta.
// Q02 - Crie um filho para elementoOndeVoceEsta.
// Q03 - Crie um filho para primeiroFilhoDoFilho.
// Q04 - A partir desse filho criado, acesse terceiroFilho.

// //Q01


// let acesso = document.getElementById('pai');
// let irmao = document.createElement('section');
// irmao.id = 'irmao';

// acesso.appendChild(irmao);

// //Q02

// let acesso2 = document.getElementById('elementoOndeVoceEsta');
// let terceiroNeto = document.createElement('section');
// terceiroNeto.id = 'terceiroNeto'

// acesso2.appendChild(terceiroNeto);

// //Q03

// let acesso3 = document.getElementById('primeiroFilhoDoFilho');
// let primeiroBisneto = document.createElement('section');
// primeiroBisneto.id = 'primeiroBisneto'

// acesso3.appendChild(primeiroBisneto);

// //Q04

// console.log(document.getElementById('primeiroBisneto').parentElement.parentElement.nextElementSibling);


// Exercícios para fixar P3

//Remova todos os elementos filhos de paiDoPai exceto pai, elementoOndeVoceEsta e primeiroFilhoDoFilho.

console.log(document.getElementById('paiDoPai'));
let remove = document.getElementById('pai');
remove.removeChild(primeiroFilho);
remove.removeChild(terceiroFilho);
remove.removeChild(quartoEUltimoFilho);

let remove2 = document.getElementById('elementoOndeVoceEsta');
remove2.removeChild(segundoEUltimoFilhoDoFilho);


