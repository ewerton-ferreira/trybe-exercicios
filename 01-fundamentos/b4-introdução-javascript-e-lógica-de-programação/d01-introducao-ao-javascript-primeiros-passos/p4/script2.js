const currentHour = 25;
let message = "";

if (currentHour >= 22 && currentHour < 24) {
    console.log(message.push = "Não deveríamos comer nada, é hora de dormir");
} else if (currentHour >= 18 && currentHour < 22) {
    console.log(message.push = "Rango da noite, vamos jantar :D");
} else if( currentHour >= 14 && currentHour < 18) {
    console.log(message.push = "Vamos fazer um bolo pro café da tarde?");
} else if(currentHour > 11 && currentHour < 14) {
    console.log(message.push = "Hora do almoço");
} else if (currentHour > 4 && currentHour < 11) {
    console.log(message.push = "Hmmm, cheiro de café recém passado")
} else if(currentHour >= 0  && currentHour < 4) {
    console.log(message.push = "Não deveríamos comer nada, é hora de dormir");
} else {
    console.log("O dia só tem 24h")
}
return("message")