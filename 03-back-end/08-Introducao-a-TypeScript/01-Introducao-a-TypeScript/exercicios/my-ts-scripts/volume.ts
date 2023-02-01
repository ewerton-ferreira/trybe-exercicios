import readline from 'readline-sync';

const units = ['km³', 'hm³', 'dam³', 'm³', 'dm³', 'cm³', 'mm³'];

export function convert(value: number, unit: string, conversion: string): number {
  const unitIndex = units.indexOf(unit);
  const conversionIndex = units.indexOf(conversion);
  const diff = conversionIndex - unitIndex;
  return value * Math.pow(1000, diff);
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