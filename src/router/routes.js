const express = require('express');
const {
  todosOsRegistros,
  registrarNovoCadastro,
  updateInfo,
} = require('../controller/controllerRegister');

const apiRouter = express.Router();

apiRouter.get('/registros', todosOsRegistros);
apiRouter.post('/novo', registrarNovoCadastro);
apiRouter.put('/update/:id', updateInfo);

module.exports = {
  apiRouter,
};
