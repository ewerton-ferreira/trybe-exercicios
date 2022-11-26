const BooksService = require('../service/BooksService');

const getAll = async (_req, res) => {
  try {
    const books = await BooksService.getAll();
    return res.status(200).json(books);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const getById = async (req, res) => {
  const { id } = req.params;
  try {
    const books = await BooksService.getById(id);
    return res.status(200).json(books);
  } catch (e) {
    console.log(e.message);
    res.status(404).json({ message: 'Book not found' });
  }
};

const create = async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const book = await BooksService.create({ title, author, pageQuantity });
    return res.status(201).json(book);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const update = async (req, res) => {
  const { id } = req.params;
  const { title, author, pageQuantity } = req.body;
  const updateBook = await BooksService.update(id, { title, author, pageQuantity });
  if (!updateBook) return res.status(404).json({ message: 'Book not found' });
  return res.status(201).json({ message: 'Book updated!’' });
};

const remove = async (req, res) => {
  const { id } = req.params;
  const book = await BooksService.remove(id);
  if (!book) return res.status(404).json({ message: 'Book not found' });
  return res.status(200).json({ message: 'Book deleted!' });
};


module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};