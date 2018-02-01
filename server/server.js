const express = require('express');
const { port } = require('./config');

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Pong!')
})

app.listen(port, () => {
  console.log(`Running server on ${port}...`);
})
