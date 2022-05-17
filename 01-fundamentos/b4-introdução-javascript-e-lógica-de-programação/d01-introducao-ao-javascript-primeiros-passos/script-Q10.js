const valorCusto = 15;
const valorVenda = 50;
const impostoSobreOCusto = valorCusto * 0.2;
let quantidadeDeVenda = 1000;



let valorCustoTotal = (valorCusto + impostoSobreOCusto) * quantidadeDeVenda;
let lucro = (valorVenda * quantidadeDeVenda) - valorCustoTotal

if(valorCusto != 0 || valorVenda != 0) {
    console.log(lucro);
} else {
    console.log("Valores inválidos");
} 
