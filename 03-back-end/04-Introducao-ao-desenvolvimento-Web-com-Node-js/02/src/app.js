const express = require('express');

const activities = [
  {
    id: 1,
    description: 'Banho no cachorro',
    status: 'A fazer',
  },
  {
    id: 2,
    description: 'Lavar a louça',
    status: 'A fazer',
  },
  {
    id: 3,
    description: 'Estudar JavaScript',
    status: 'Feito',
  },
];


const app = express();

app.use(express.json());


// Rotas

app.get('/activities', (req, res) => {
  return res.status(200).json(activities);
});

app.get('/activities/:id', (req, res) => {
  // const { id } = req.params;
  // const activity = activities.find(({ id }) => id === Number(id)); ou
  // const activity = activities.find(({ id }) => +id === id); ou
  // const activity = activities.find((activity) => activity.id === Number(id));
  const idParam = req.params.id;
  const activity = activities.find(({ id }) => id === Number(idParam));
  return res.status(200).json(activity);
});

app.post('/activities', (req, res) => {
  const activity = req.body;
  activities.push(activity);
  return res.status(200).json(activities);
});


app.post('/activities/:id', (req, res) => {
  const idParam = req.params.id;
  const {descriptions, status} = req.body;
  let altersdActivity;

  for(let i = 0; i < activities.length; i += 1) {
    const activity = activities[i];

    if(activity.id === Number(idParam)) {
      activity.description = descriptions;
      activity.status = status;
      altersdActivity = activity;
    }
  }
  return res.status(200).json(altersdActivity);
});
    
app.delete('/activities', (req, res) => {
  const idParam = req.params.id;
  const arrayPosition = activities.findIndex(({ id }) => id === Number(idParam));
  activities.splice(arrayPosition, 1);
  // return res.status(200).end();
  return res.status(200).json({message: 'Registro excluído com sucesso!'});
});


module.exports = app;