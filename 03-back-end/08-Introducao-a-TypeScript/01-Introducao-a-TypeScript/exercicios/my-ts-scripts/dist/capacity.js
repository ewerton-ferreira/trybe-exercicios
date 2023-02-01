"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.exec = exports.convert = void 0;
const readline_sync_1 = __importDefault(require("readline-sync"));
const units = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];
function convert(value, unit, conversion) {
    const unitIndex = units.indexOf(unit);
    const conversionIndex = units.indexOf(conversion);
    const diff = conversionIndex - unitIndex;
    return value * Math.pow(10, diff);
}
exports.convert = convert;
function exec() {
    const value = readline_sync_1.default.questionFloat('Digite o valor a ser convertido: \n');
    const unit = readline_sync_1.default.keyInSelect(units, 'Escolha um número para a unidade base:');
    const conversion = readline_sync_1.default.keyInSelect(units, 'Escolha um número para a conversão:');
    const fromConvert = units[unit];
    const toConvert = units[conversion];
    if (!fromConvert || !toConvert) {
        console.log('Unidade inválida');
        return 0;
    }
    const result = convert(value, fromConvert, toConvert);
    const message = `${value}${fromConvert} é igual a ${result}${toConvert}`;
    console.log(message);
}
exports.exec = exec;
exec();
