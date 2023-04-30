import { Router } from 'express';
import MotorcyclesController from '../Controllers/MotorcyclesController';

const routes = Router();

routes.post('/motorcycles', (req, res, next) => new MotorcyclesController(req, res, next)
  .createMotorcycles());

export default routes;
