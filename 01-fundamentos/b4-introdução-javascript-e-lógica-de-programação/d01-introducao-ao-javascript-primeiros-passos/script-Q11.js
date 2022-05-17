let salarioBruto = 3000;

if(salarioBruto <= 1556.94) {
    descInss = salarioBruto * 0.08;
} else if (salarioBruto <= 2594.92) {
    descInss = salarioBruto * 0.09;     
} else if (salarioBruto <= 5189.82) {
    descInss = salarioBruto * 0.11; 
} else {
    descInss = 570.88; 
}

if(salarioBruto - descInss <= 1903.98) {
    ir = 0;
} else if (salarioBruto - descInss <= 2826.65) {
    ir = ((salarioBruto - descInss) * 0.075) - 142.80;
} else if (salarioBruto - descInss <= 3751.05) {
    ir = ((salarioBruto - descInss) * 0.15) - 354.80;
} else if (salarioBruto - descInss <= 4664.68) {
    ir = ((salarioBruto - descInss) * 0.225) - 636.13;
} else {
    ir = ((salarioBruto - descInss) * 0.275) - 869.36;
}

let salarioLiquido = salarioBruto - descInss - ir

console.log(salarioLiquido)