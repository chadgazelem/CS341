const routes = require('express').Router();
const lesson1Controller = require ('../controllers/lesson1');
 
routes.get('/', lesson1Controller.sarahRoute);
routes.get('/chad', lesson1Controller.chadRoute);

module.exports = routes;