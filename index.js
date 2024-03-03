const http = require('http');
const express = require('express');

const PORT = process.env.NODE_ENV ?? 5000;

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Ok');
});

const server = http.createServer(app);

server.listen(PORT, () =>
  console.log(`Server is listening http://localhost:${PORT}`)
);

module.exports = app;
