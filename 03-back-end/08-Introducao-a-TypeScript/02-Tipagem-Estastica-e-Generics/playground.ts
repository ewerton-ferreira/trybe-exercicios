const numbers = [1, 2, 3, 4, 5, 6];
const persons = ['Tati', 'Baeta', 'Murilo', 'Gui'];
const trueOrFalse = [true, false];
const numbersAndLerrers = ['a', 1, 'b', 2, 3, 'd', 4];

function getRandomElement<T>(items: T[]): T {
  const item = Math.floor(Math.random() * items.length);
  return items[item];
}

const sortNumber = getRandomElement(numbers);
const sortPerson = getRandomElement<string>(persons);
const sortBoolean = getRandomElement<boolean>(trueOrFalse);
const sortNumAndStr = getRandomElement<(number | string)>(numbersAndLerrers);

console.log([sortNumber, sortPerson, sortBoolean, sortNumAndStr]);


type Address2 = {
  street: string,
  city: string,
  state: string,
  number: number,
  country: string
}

interface Iperson {
  name: string,
  birthDate: Date,
  email: string,
  address: Address2
}

interface Tperson {
  name: string,
  birthDate: Date,
  email: string,
  address: Address2
}

type Lawyer = {
  oab: string
} & Iperson;

interface Doctor extends Tperson {
  crm: string
}

const tati: Lawyer = {
  name: 'Tati',
  birthDate: new Date('2000-12-01'),
  email: 't@t.com',
  address: {
    street: 'Rua 1',
    city: 'São Paulo',
    state: 'SP',
    number: 1,
    country: 'Brasil'
  },
  oab: 'SP105490'
}

const zambis: Doctor = {
  name: 'Zambis',
  birthDate: new Date('2000-09-09'),
  email: 'z@z.com',
  address: {
    street: 'Rua 2',
    city: 'Rio de Janeiro',
    state: 'RJ',
    number: 2,
    country: 'Brasil'
  },
  crm: 'CRM/MG 4321'
}

class Calculator {
  public n1;
  public n2;
  constructor(n1: number, n2: number) {
    this.n1 = n1;
    this.n2 = n2;
  }
  sum() { console.log(this.n1 + this.n2) }
  sub() { console.log(this.n1 - this.n2) }
  div() { console.log(this.n1 / this.n2) }
  mult() { console.log(this.n1 * this.n2) }
}

const calculator = new Calculator(2, 2);
calculator.sum ();
calculator.sub ();
calculator.div ();
calculator.mult ();
