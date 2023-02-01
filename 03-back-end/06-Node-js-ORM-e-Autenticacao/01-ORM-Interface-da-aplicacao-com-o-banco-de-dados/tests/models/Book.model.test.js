const { expect } = require('chai');
const { Book } = require('../../src/models')

describe('Testando a camada model de Book', () =>{
  it('Verifica se o model Book está definido', function() {
    expect(Book).to.be.an('function');
  });    

  it('Verifica se o model Book está definido a coluna title', function() {
    const { title } = Book.rawAttributes;
    expect(title).to.be.an('object');
  });   

  it('Verifica se o model Book está definido a coluna author', function() {
    const { author } = Book.rawAttributes;
    expect(author).to.be.an('object');
  });

  it('Verifica se o model Book está definido a coluna pageQuantity', function() {
    const { pageQuantity } = Book.rawAttributes;
    expect(pageQuantity).to.be.an('object');
  });

  it('Verifica se o model Book está definido a coluna publisher', function() {
    const { publisher } = Book.rawAttributes;
    expect(publisher).to.be.an('object');
  });

  it('possui a propriedade "title"', function () {
    const book = new Book();
    expect(book).to.have.property('title');
  });

  it('possui a propriedade "author"', function () {
    const book = new Book();
    expect(book).to.have.property('author');
  });

  it('possui a propriedade "pageQuantity"', function () {
    const book = new Book();
    expect(book).to.have.property('pageQuantity');
  });

  it('possui a propriedade "publisher"', function () {
    const book = new Book();
    expect(book).to.have.property('publisher');
  });
});