const express = require('express');

const librosRouter = require('./libros.router');
const estudiantesRouter = require('./estudiantes.router');
const prestamosRouter = require('./prestamos.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  //router.use('/libros', librosRouter);
  router.use('/estudiantes', estudiantesRouter);
  //router.use('/prestamos', prestamosRouter);
}

module.exports = routerApi;
