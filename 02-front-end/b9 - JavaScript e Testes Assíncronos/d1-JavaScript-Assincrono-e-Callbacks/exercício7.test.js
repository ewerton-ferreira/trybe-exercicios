const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

test('Verifica se a função uppercase está sendo usada na callback', (done) => {
  uppercase('mengão 7x1', (result) => {
    try {
      expect(result).toEqual('MENGÃO 7X1');
      done();
    } catch (error) {
      done(error);
    }
  });
});