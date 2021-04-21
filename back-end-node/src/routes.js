const express = require('express');
const ProfessionController = require('./controllers/ProfessionController');
const ProfessionalController = require('./controllers/ProfessionalController');

const routes = express.Router();

routes.get('/professions', ProfessionController.findAll);
routes.get('/professions/:id', ProfessionController.findById);
routes.post('/professions', ProfessionController.store);
routes.put('/professions/:id', ProfessionController.update);

routes.get('/professionals', ProfessionalController.findAll);
routes.get('/professionals/:id', ProfessionalController.findById);
routes.post('/professionals', ProfessionalController.store);
routes.put('/professionals/:id', ProfessionalController.update);
routes.delete('/professionals/:id', ProfessionalController.delete);

module.exports = routes;