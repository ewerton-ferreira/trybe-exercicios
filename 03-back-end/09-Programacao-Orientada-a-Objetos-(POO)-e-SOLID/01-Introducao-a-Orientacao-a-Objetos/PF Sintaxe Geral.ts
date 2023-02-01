//classes
class TV {
  //atributos
  brand: string; // marca da TV;
  size: number; // tamanho em polegadas;
  resolution: string; // resolução da tela;
  connections: string[]; // conexões disponíveis(HDMI, Ethernet, etc.);
  connectedTo?: string; // conexão atual Este atributo não precisa ser inicializado no construtor.

    // Métodos
    // Método construtor
  constructor(b: string, s: number, r: string, c: string[]) {
    console.log(`Creating TV ${b}`);
    // Atribuir valores de fora aos atributos do objeto
    this.brand = b;
    this.size = s;
    this.resolution = r;
    this.connections = c;
  }

    // Método de qualquer exemplo
  // sleep() {
  //   console.log(`${this.brand}: zzzzzzz`);
  // }

  turnOn():void {
    console.log(`TV ${this.brand}, ${this.size}", resolution: ${this.resolution} \n\
    available connections: ${this.connections}`);
  }
}

// criação dos objetos
const tv1 = new TV('Sony', 40, 'HD', ['HDMI', 'Ethernet', 'WIFI']);

// acessar os atibutos
// console.log(tv1.brand, tv1.size, tv1.resolution, tv1.connections);
// console.log(tv2.brand, tv2.size, tv2.resolution, tv2.connections);
// console.log(tv3.brand, tv3.size, tv3.resolution, tv3.connections);

// acessar os métodos
tv1.turnOn();

/*
Saída:
Creating person Maria
Creating person João
Maria 171 58
João 175 66
Maria: zzzzzzz
João: zzzzzzz
*/