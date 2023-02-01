import readline from 'readline-sync';

import * as ar from './area';
import * as cp from './capacity';
import * as len from './length';
import * as mas from './mass';
import * as vol from './volume';

const conversions = [
  { name: 'Converter em unidade de comprimentos', conversion: './length' },
  { name: 'Converter em unidade de massa', conversion: './mass' },
  { name: 'Converter em unidade de capacidade', conversion: './capacity' },
  { name: 'Converter em unidade de área', conversion: './area' },
  { name: 'Converter em unidade de volume', conversion: './volume' },
]

const conversionNames = conversions.map(e => e.name);

const typeConversion = readline.keyInSelect(conversionNames, 'Escolha um número que corresponde ao tipo de conversão');

require(conversions[typeConversion].conversion);