const express = require('express');

const librosRouter = require('./libros.router');
const categoriasRouter = require('./categorias.router');
const estudiantesRouter = require('./estudiantes.router');
const prestamosRouter = require('./prestamos.router');
const editorialesRouter = require('./editoriales.router');
const carrerasRouter = require('./carreras.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/libros', librosRouter);
  router.use('/categorias', categoriasRouter);
  router.use('/estudiantes', estudiantesRouter);
  router.use('/prestamos', prestamosRouter);
  router.use('/editoriales', editorialesRouter);
  router.use('/carreras', carrerasRouter);
}

module.exports = routerApi;
