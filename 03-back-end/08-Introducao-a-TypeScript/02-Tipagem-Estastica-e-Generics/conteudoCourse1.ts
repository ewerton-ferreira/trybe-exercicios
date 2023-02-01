type Point = {
  x: number;
  y: number;
};


function printCoord(pt: Point) {
  console.log("O valor da cordenada x é: " + pt.x);
  console.log("O valor da coordenada y é: " + pt.y);
}

printCoord({ x: 100, y: 100 });
//saída:
//O valor da cordenada x é: 100
//O valor da cordenada y é: 100

type Bird = {
  andorinha: 1;
  coruja: 2;
  picaPau: 3;
};

type Numeric = {
  // [key: string]: number;
  x: number;
  y: number;
}

function sum(num: Numeric) {
  return num.x + num.y;
}
// ou

type Sum = (x: number, y: number ) => number;

const sums: Sum = (x, y) => x + y;

// exercício 03

type Address = {
  street: string;
  number: number;
  city: string;
  state: string;
  country: string;
};


