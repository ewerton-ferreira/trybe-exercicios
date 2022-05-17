let questoes = 20
let acertos = 8;
let porcentagem = acertos / questoes * 100

if (porcentagem > 100) {
    console.log("Erro, resultado inválido")
} else if (porcentagem >= 90) {
    console.log("Sua nota foi A")
} else if (porcentagem >= 80) {
    console.log("Sua nota foi B")
} else if (porcentagem >= 70) {
    console.log("Sua nota foi C")
} else if (porcentagem >= 60) {
    console.log("Sua nota foi D")
} else if (porcentagem >= 50) {
    console.log("Sua nota foi E")
} else if (porcentagem >= 0 && porcentagem < 50) {
    console.log("Sua nota foi F")
} else {
    console.log("Erro, resultado inválido")
}