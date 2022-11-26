const { readFile } = require('fs').promises;
const path = require('path');

const filePath = path.resolve(__dirname, '..', 'movies.json');

const getAllMovies = async () => {
  const content = JSON.parse(await readFile(filePath));
  return content;
} 

const createMovie = async (movie) => {
  const content = await getAllMovies();
  await writeFile(filePath, JSON.stringify([...({ id: content.length + 1, ...movie })], null, 2));
};

module.exports = { getAllMovies, createMovie };