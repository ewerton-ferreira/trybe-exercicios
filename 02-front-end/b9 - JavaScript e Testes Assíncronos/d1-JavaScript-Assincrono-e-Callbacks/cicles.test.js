// cicles.test.js

// let cities = [];

// const addCity = (city) => {
//   cities.push(city);
// };

// const removeCity = (city) => {
//   cities = cities.filter((eachCity) => eachCity !== city);
// };

// test('Testa a função addCity', () => {
//   expect.assertions(5);
//   addCity('Campinas');
//   addCity('Goiania');
//   addCity('Recife');
//   addCity('Serra Talhada');
//   expect(cities).toHaveLength(4);
//   expect(cities).toContain('Campinas');
//   expect(cities).toContain('Goiania');
//   expect(cities).toContain('Recife');
//   expect(cities).toContain('Serra Talhada');
// });

// test('Testa a função removeCity', () => {
//   expect.assertions(5);
//   removeCity('Campinas');
//   expect(cities).toHaveLength(3);
//   expect(cities).not.toContain('Campinas');
//   expect(cities).toContain('Goiania');
//   expect(cities).toContain('Recife');
//   expect(cities).toContain('Serra Talhada');
// });

describe('Testes manuais', () => {
  
  let galeraDoFundao = ['Ewerton', 'Ju', 'Vitória', 'Daniel O.', 'Lucas']

  const namesIncluded = (name) => galeraDoFundao.includes(name);

  beforeEach(() => {
    galeraDoFundao = [...galeraDoFundao, 'Dani', 'Amandinha'];
  })

  afterEach(() => {
    galeraDoFundao = ['Ewerton', 'Ju', 'Vitória', 'Daniel O.', 'Lucas']
  })

  test('Verifica se o nome Dani e Amandinha não estão no array galera do fundão', () => {
    expect(galeraDoFundao).toContain('Dani', 'Amandinha');
  })

  test('Verifica se todos os nomes estão no array galera do fundão', () => {
    expect(namesIncluded('Ewerton', 'Ju', 'Vitória', 'Daniel O.', 'Lucas', 'Dani', 'Amandinha')).toBeTruthy();
  })

  test('Verifica se todos os nomes estão no array galera do fundão', () => {
    expect(namesIncluded('Zezé', 'Renan', 'Luquinha')).toBeFalsy();
  })

  test('Verifica se o nome Ju e Vitória estão no array galera do fundão', () => {
    expect(galeraDoFundao).toContain('Ju', 'Vitória');
  })

  test('Verifica se o tamanho do array galera do fundão é igual a 7', () => {
    expect(galeraDoFundao).toHaveLength(7);
  })
})

// describe('Agrupa o primeiro bloco de testes', () => {
//   beforeEach(() => {
//     cities = ['Pindamonhangaba'];
//   });

// afterEach(() => {
//   cities = [];
// });

// test('Testa a função addCity dentro do primeiro bloco de testes', () => {
//   expect.assertions(3);
//   addCity('Piraporinha');
//   expect(cities).toHaveLength(2);
//   expect(cities).toContain('Pindamonhangaba');
//   expect(cities).toContain('Piraporinha');
// });

// test('Testa a função removeCity dentro do primeiro bloco de testes', () => {
//   expect.assertions(2);
//   removeCity('Pindamonhangaba');
//   expect(cities).not.toContain('Pindamonhangaba');
//   expect(cities).toHaveLength(0);
// });
// });

// describe('Agrupa o segundo bloco de testes', () => {
//   beforeEach(() => {
//     cities = ['Tangamandapio'];
//   });
  
//   afterEach(() => {
//     cities = [];
//   });
  
//   test('Testa a função addCity dentro do segundo bloco de testes', () => {
//     expect.assertions(3);
//     expect(cities).toHaveLength(1);
//     expect(cities).not.toContain('Pindamonhangaba');
//     expect(cities).toContain('Tangamandapio');
//   });
  
//   test('Testa a função removeCity dentro do segundo bloco de testes', () => {
//     expect.assertions(2);
//     removeCity('Tangamandapio');
//     expect(cities).not.toContain('Pindamonhangaba');
//     expect(cities).toHaveLength(0);
//   });
// });
