import { Router } from 'express';
import MotorcyclesController from '../Controllers/MotorcyclesController';

const routes = Router();

routes.post('/motorcycles', (req, res, next) => new MotorcyclesController(req, res, next)
  .createMotorcycles());
  
// routes.get('/motorcycles', (req, res, next) => new MotorcyclesController(req, res, next)
//   .getAllMotorcycles());

// routes.get('/motorcycles/:id', (req, res, next) => new MotorcyclesController(req, res, next)
//   .getById());

export default routes;
