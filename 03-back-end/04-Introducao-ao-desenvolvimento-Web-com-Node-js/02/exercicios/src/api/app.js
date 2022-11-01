const express = require('express');
const getAllMovies = require('../utils/handleJson');

const app = express();

app.use(express.json());

const OK = 200;


app.get('/movies/:id', async (req, res) => {
  const { id } = req.params;
  const movies = await getAllMovies();
  const foundMovie = movies.find((e) => e.id === Number(id));
  return res.status(OK).json({ movie: foundMovie });
});

module.exports = app;
