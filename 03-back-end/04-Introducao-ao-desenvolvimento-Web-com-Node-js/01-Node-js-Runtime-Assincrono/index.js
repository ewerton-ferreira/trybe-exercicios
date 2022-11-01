// const path = require('path');

// console.log(path.dirname('/usr/share/gnome'));
// console.log(path.resolve('usr', 'share', 'gnome'));
// console.log(path.resolve('/', 'usr', 'share', 'gnome'));

// const brlValue = require('./brlValue');

// const usd = 37.5;
// const brl = convert(usd);

// console.log(brl.toFixed(2));
// console.log(brlValue);
// console.log(`Valor do dólar: ${brlValue.brl}`);
// console.log(`10 dólares em reais: ${brlValue.usdToBrl(10).toFixed(2)}`);

// const { brl, usdToBrl } = require('./brlValue');

// console.log(`Valor do dólar: ${brl}`); // Valor do dólar: 5.37
// console.log(`10 dólares em reais: ${usdToBrl(10)}`); // 10 dólares em reais: 53.7

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// const celsiusToFahrenheit = require('./temp').celsiusToFahrenheit;
// const fahrenheitToCelsius = require('./temp').fahrenheitToCelsius;

// console.log(celsiusToFahrenheit(35)); // 95
// console.log(fahrenheitToCelsius(85).toFixed(2)); // 29.44

// const temp = require('./temp');

// console.log(temp.celsiusToFahrenheit(20)); // 68
// console.log(temp.fahrenheitToCelsius(100).toFixed(2)); // 37.78

const { celsiusToFahrenheit, fahrenheitToCelsius }= require('./temp');
console.log(celsiusToFahrenheit(28)); // 68
console.log(fahrenheitToCelsius(150).toFixed(2)); // 37.78


// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// const meuModulo = require('./meuModulo');

// console.log(meuModulo);
// meuModulo.func1();


// MÓDULOS LOCAIS


// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


// MÓDULOS INTERNOS

// const fs = require('fs');

// fs.readFileSync('./meuArquivo.txt');