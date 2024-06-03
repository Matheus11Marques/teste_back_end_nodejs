const express = require('express');
const cors = require('cors');
const { apiRouter } = require('./src/router/routes');

const server = express();

server.use(cors());
server.use(express.json());

server.use('/projeto', apiRouter);

server.use((req, res) => {
  res.status(404).json({
    error: 'page not found',
  });
});

server.listen(8080, () => {
  console.log('server running');
});
