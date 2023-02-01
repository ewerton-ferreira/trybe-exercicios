import readline from 'readline-sync';

const units = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];

export function convert(value: number, unit: string, conversion: string): number {
  const unitIndex = units.indexOf(unit);
  const conversionIndex = units.indexOf(conversion);
  const diff = conversionIndex - unitIndex;
  return value * Math.pow(10, diff);
}

export function exec() {
  const value = readline.questionFloat('Digite o valor a ser convertido: \n');

  const unit = readline.keyInSelect(units, 'Escolha um número para a unidade base:')

  const conversion = readline.keyInSelect(units, 'Escolha um número para a conversão:')

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

exec();