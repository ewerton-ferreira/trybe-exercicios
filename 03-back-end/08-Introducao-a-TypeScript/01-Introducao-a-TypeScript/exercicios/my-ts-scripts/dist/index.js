"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const conversions = [
    { name: 'Converter em unidade de comprimentos', conversion: './length' },
    { name: 'Converter em unidade de massa', conversion: './mass' },
    { name: 'Converter em unidade de capacidade', conversion: './capacity' },
    { name: 'Converter em unidade de área', conversion: './area' },
    { name: 'Converter em unidade de volume', conversion: './volume' },
];
const conversionNames = conversions.map(e => e.name);
const typeConversion = readline_sync_1.default.keyInSelect(conversionNames, 'Escolha um número que corresponde ao tipo de conversão');
require(conversions[typeConversion].conversion);
