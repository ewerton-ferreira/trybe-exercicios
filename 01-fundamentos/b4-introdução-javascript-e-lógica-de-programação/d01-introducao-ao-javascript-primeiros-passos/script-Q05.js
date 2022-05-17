const anguloX = -120
const anguloY = 30
const anguloZ = 30

let angulos = (anguloX + anguloY + anguloZ)

if(angulos === 180) {
    console.log(angulos === 180)
} else if (angulos > 0 && angulos < 180) {
    console.log(angulos === 180)
} else {
    console.log("Inválido")
}
